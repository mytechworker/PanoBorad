import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { get } from 'lodash';

import {
  Box,
  Title5,
  Flex,
  Text,
  Button,
  Modal,
  SpinnerView,
  IntegrationsMatchingLocationsForm as Form,
  IntegrationsMatchedLocations,
} from 'components';
import { AllLocations, DentrixLocation, LocationModel } from 'types';

import noLocation from 'assets/images/intergration/no-location.svg';

type Props = {
  fetching: boolean;
  dentrixLocationAssigning: boolean;
  dentrixLocations: DentrixLocation[];
  locationsData: AllLocations;
  onAssignLocation: (info: {
    dentrix_location: string;
    location: number;
  }) => void;
  onChangeModalStatus: (status: boolean) => void;
  onShowStatusItems: () => void;
  assignModalStatus: boolean;
};
const IntegrationsMatchingLocations = ({
  dentrixLocations,
  locationsData,
  onAssignLocation,
  fetching,
  dentrixLocationAssigning,
  assignModalStatus,
  onChangeModalStatus,
  onShowStatusItems,
}: Props) => {
  const allLocations: LocationModel[] = get(locationsData, 'data.data', []);
  const hasMatchedLocation = allLocations.filter((item) => item.dentrix_id);
  const noMoreLocation = allLocations.length === hasMatchedLocation.length;
  return (
    <>
      <Box
        background="white"
        borderRadius="15px"
        padding="24px"
        margin="0 24px"
      >
        <Box>
          <Flex justifyContent="space-between">
            <Title5>Matching Locations</Title5>
            {!noMoreLocation && (
              <Button size="small" onClick={() => onChangeModalStatus(true)}>
                <PlusOutlined />
              </Button>
            )}
          </Flex>
          {fetching ? (
            <SpinnerView height="300px" />
          ) : hasMatchedLocation?.length > 0 ? (
            <IntegrationsMatchedLocations
              locationsData={locationsData}
              onShowStatusItems={onShowStatusItems}
              onEditModal={() => {}}
            />
          ) : (
            <>
              <Flex paddingTop="60px">
                <Text weight="600" color="gray8" fontSize="16px">
                  For adding location hit the plus button
                </Text>
              </Flex>
              <Flex>
                <img src={noLocation} alt="No Location" />
              </Flex>
            </>
          )}
        </Box>
      </Box>
      <Modal
        destroyOnClose
        title=""
        maskClosable={false}
        visible={assignModalStatus}
        onCancel={() => onChangeModalStatus(false)}
        width={755}
        closeIcon={true}
      >
        <Form
          onSubmit={onAssignLocation}
          submitting={dentrixLocationAssigning}
          dentrixLocations={dentrixLocations}
          allLocations={allLocations}
        />
      </Modal>
    </>
  );
};

export default IntegrationsMatchingLocations;
