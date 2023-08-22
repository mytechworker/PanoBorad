import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';
import { formatPhoneNumber } from 'helpers';
import { PatientNumberModel } from 'types';
import { Box, Flex, Text } from 'components';
import { appSelector } from 'redux/selectors';

type Props = {
  onClick?: () => void;
  data: PatientNumberModel;
  selected: boolean;
};

const ConversationChatItem = ({ onClick, data, selected }: Props) => {
  const location = useSelector(appSelector.selectLocationInfo);

  return (
    <Box
      paddingLeft="10px"
      marginBottom="10px"
      paddingBottom="10px"
      paddingTop={selected ? '10px' : ''}
      borderBottom={selected ? '' : '1px solid #DADADA'}
      onClick={onClick}
      borderLeft={selected ? '3px solid #5A8DEE' : ''}
      background={
        selected ? 'linear-gradient(270deg, #FFFFFF 1.2%, #5A8DEE 196.92%)' : ''
      }
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Flex
            marginRight="10px"
            background="primary"
            borderRadius="50%"
            padding="12px 16px"
            width="36px"
            height="36px"
          >
            <Text color="white" weight="800" fontSize=" 12px">
              {data.patient_name
                ? data.patient_name.substr(0, 2)
                : data.phone_number.substr(0, 2)}
            </Text>
          </Flex>
          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <Text weight="bold" fontSize=" 14px" color="black2">
                {data.patient_name
                  ? data.patient_name
                  : formatPhoneNumber(data.phone_number)}
              </Text>
              <Text
                weight="600"
                fontSize=" 12px"
                color="gray1"
                maxWidth="150px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {data.last_message}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Box marginLeft="16px">
          <Flex flexDirection="column">
            <Text weight="600" fontSize=" 11px" color="gray1">
              {data?.last_message_date &&
                location?.location_timezone &&
                moment
                  .tz(data.last_message_date, location?.location_timezone)
                  .fromNow()}
            </Text>
            {data.unread_messages > 0 && (
              <Flex
                background="primary"
                borderRadius="50%"
                width="20px"
                height="20px"
                color="white"
              >
                <Text weight="800" fontSize="10px" color="white">
                  {data.unread_messages}
                </Text>
              </Flex>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ConversationChatItem;
