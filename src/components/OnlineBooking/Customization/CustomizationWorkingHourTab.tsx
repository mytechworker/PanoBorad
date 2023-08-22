import React, { useState } from 'react';
import moment from 'moment';
import { WorkingHoursModel, BlockHoursModel, ProviderModel } from 'types';
import { Flex, Text } from 'components';
import { EditIcon } from 'helpers/icons';
type Props = {
  providerItem: ProviderModel;
  handleOpenBlockHour: any;
  handleOpenWorkingHour: any;
};
const CustomizationWorkingHourTab = ({
  providerItem,
  handleOpenBlockHour,
  handleOpenWorkingHour,
}: Props) => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Flex flexDirection="column" marginBottom="24px" alignItems="flex-start">
        <Text
          fontSize="12px"
          lineHeight="20px"
          weight="700"
          color="primary"
          displayD="inherit"
          decoration="underline"
          onClick={() => handleOpenWorkingHour(providerItem)}
          className="has-cursor"
        >
          Add Working Hours
          <div style={{ marginLeft: '5px' }} className="has-cursor">
            <EditIcon />
          </div>
        </Text>
        {providerItem?.workinghours.map(
          (workingHour: WorkingHoursModel, index: number) => {
            return (
              <Flex flexDirection="column" alignItems="flex-start" key={index}>
                <Flex flexDirection="row">
                  {workingHour?.week_days?.map(
                    (week_day: number, index: number) => {
                      return (
                        <Text
                          fontSize="10px"
                          color="black2"
                          weight="700"
                          key={index}
                          marginRight="5px"
                        >
                          {moment()
                            .day(week_day + 1)
                            .format('ddd')}
                        </Text>
                      );
                    }
                  )}
                  {workingHour?.date && (
                    <Text
                      fontSize="10px"
                      color="black2"
                      weight="700"
                      key={index}
                      marginRight="5px"
                    >
                      {moment(workingHour?.date).format('DD MMM YYYY')}
                    </Text>
                  )}
                </Flex>
                <Text fontSize="10px" color="gray8">
                  {`${moment(workingHour.start_time, 'hh:mm:ss').format(
                    'hh:mm:ss a'
                  )} - ${moment(workingHour.end_time, 'hh:mm:ss').format(
                    'hh:mm:ss a'
                  )}`}
                </Text>
              </Flex>
            );
          }
        )}
      </Flex>
      <Flex flexDirection="column" alignItems="flex-start">
        <Text
          weight="700"
          fontSize="12px"
          lineHeight="20px"
          color="primary"
          displayD="inherit"
          decoration="underline"
          className="has-cursor"
          onClick={() => handleOpenBlockHour(providerItem)}
        >
          Add Blocked Hours
          <div className="has-cursor" style={{ marginLeft: '5px' }}>
            <EditIcon />
          </div>
        </Text>
        {providerItem?.blockhours.map(
          (blockhour: BlockHoursModel, index: number) => {
            return (
              <Text fontSize="10px" color="gray8" key={index}>
                {`${moment(blockhour.date).format('DD/MMM')}, ${moment(
                  blockhour.start_time,
                  'hh:mm:ss'
                ).format('hh:mm:ss a')} - ${moment(
                  blockhour.end_time,
                  'hh:mm:ss'
                ).format('hh:mm:ss a')}`}
              </Text>
            );
          }
        )}
      </Flex>
    </Flex>
  );
};

export default CustomizationWorkingHourTab;
