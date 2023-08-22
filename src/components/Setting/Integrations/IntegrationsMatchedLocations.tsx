import React from 'react';
import { get } from 'lodash';
import { Table } from 'antd';

import { AllLocations, LocationModel } from 'types';
import { Box, Button } from 'components';

import Edit from 'assets/images/edit-icon.jpg';

type Props = {
  locationsData: AllLocations;
  onShowStatusItems: () => void;
  onEditModal: (status: boolean) => void;
};
const IntegrationsMatchedLocations = ({
  locationsData,
  onShowStatusItems,
  onEditModal,
}: Props) => {
  const allLocations: LocationModel[] = get(locationsData, 'data.data', []);
  const hasMatchedLocation = allLocations.filter((item) => item.dentrix_id);

  const columns = [
    {
      title: 'Location',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Dentrix Location',
      dataIndex: 'dentrix_id',
      key: 'dentrix_id',
    },
    // {
    //   title: '',
    //   dataIndex: 'action',
    //   key: 'action',
    //   render: (_: any, item: any) => (
    //     <Box onClick={() => onEditModal(true)}>
    //       <img className="has-cursor" src={Edit} alt="edit-icon" />
    //     </Box>
    //   ),
    // },
  ];
  return (
    <>
      <Box padding="20px 0">
        <Table rowKey="pk" columns={columns} dataSource={hasMatchedLocation} />
      </Box>
      <Box>
        <Button disabled={!hasMatchedLocation} onClick={onShowStatusItems}>
          Connect
        </Button>
      </Box>
    </>
  );
};

export default IntegrationsMatchedLocations;
