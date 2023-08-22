import React, { useState } from 'react';

import { Table, Select } from 'antd';

import { ProviderModel, ProviderSpecialityModel } from 'types';
import {
  Flex,
  CustomizationProviderInfo,
  SingleSelect,
  Box,
  CustomizationHoursModal,
  CustomizationBlockHoursModal,
  CustomizationWorkingHourTab,
  CustomizationAppTypeTab,
  CustomizationStatusTab,
} from 'components';

import { CustomizationProviderTable } from '../online-booking.style';

type Props = {
  pageSize: number;
  count: number;
  changePage: (item: number) => void;
  current: number;
  onCustomizeInsurance: (id: number) => void;
  onSelect: (item: string) => void;
  loading: boolean;
  openHoursModal: any;
  dataSourceProvider: ProviderModel[];
  dataSource: any;
  openBlockHoursModal: any;
};
const CustomizationTable = ({
  onCustomizeInsurance,
  dataSourceProvider,
  pageSize,
  count,
  current,
  changePage,
  loading,
  onSelect,
  loadProvider,
  providerInfo,
  providerInfoFetching,
}: any) => {
  const pageSizeOptions = [
    {
      key: '10',
      title: '10',
    },
    {
      key: '25',
      title: '25',
    },
    {
      key: '50',
      title: '50',
    },
    {
      key: '100',
      title: '100',
    },
  ];
  const [status, setStatus] = useState('Active');
  const [openWorkingHour, setOpenWorkingHour] = useState(false);
  const [openBlockHour, setOpenBlockHour] = useState(false);

  const handleOpenWorkingHour = (item: ProviderModel) => {
    setOpenWorkingHour(true);
    loadProvider(item.pk);
  };
  const handleOpenBlockHour = (item: ProviderModel) => {
    setOpenBlockHour(true);
    loadProvider(item.pk);
  };

  const columns = [
    {
      title: 'Provider',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, item: any) => (
        <CustomizationProviderInfo key={item.pk} providerInfo={item} />
      ),
    },
    {
      title: 'Work Hours',
      dataIndex: 'work_hours',
      key: 'work_hours',
      render: (_: any, item: any) => {
        return (
          <CustomizationWorkingHourTab
            key={item.pk}
            providerItem={item}
            handleOpenBlockHour={handleOpenBlockHour}
            handleOpenWorkingHour={handleOpenWorkingHour}
          />
        );
      },
    },
    {
      title: 'App Type',
      dataIndex: 'appt_type',
      key: 'appt_type',
      render: (_: any, item: any) => (
        <CustomizationAppTypeTab key={item.pk} providerItem={item} />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'action',
      key: 'action',

      render: (_: any, item: any) => (
        <CustomizationStatusTab
          key={item.pk}
          providerInfo={item}
          onCustomizeInsurance={() => onCustomizeInsurance(item.pk)}
        />
      ),
    },
  ];
  return (
    <>
      <Flex flexDirection="column" position="relative" width="100%">
        <Box width="100%">
          <CustomizationProviderTable
            as={Table}
            rowKey="pk"
            columns={columns}
            dataSource={dataSourceProvider}
            pagination={{
              current: current,
              pageSize: pageSize,
              total: count,
              onChange: (current: number) => changePage(current),
              showSizeChanger: false,
            }}
            loading={loading}
          />
        </Box>
        <Flex
          justifyContent="flex-start"
          position="absolute"
          bottom="10px"
          left="5px"
        >
          <SingleSelect
            options={pageSizeOptions}
            selectedItem={pageSize.toString()}
            onSelect={onSelect}
          />
        </Flex>
      </Flex>
      <CustomizationHoursModal
        onCancel={() => setOpenWorkingHour(false)}
        openHoursModal={openWorkingHour}
        provider={providerInfo}
        loading={providerInfoFetching}
      />
      <CustomizationBlockHoursModal
        onCancel={() => setOpenBlockHour(false)}
        openBlockHoursModal={openBlockHour}
        provider={providerInfo}
        loading={providerInfoFetching}
      />
    </>
  );
};

export default CustomizationTable;
