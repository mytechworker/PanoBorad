import React from 'react';
import { Box, Flex, Text } from 'components';
import { RecievedChat } from './conversation.style';
import moment from 'moment';

type Props = {
  text?: string;
  time: string;
  name?: string;
};
const ConversationRecievedChat = ({ text, time, name }: Props) => {
  return (
    <Box
      marginBottom="10px"
      paddingBottom="14px"
      borderColor="gray2"
      width="100%"
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
              {name}
            </Text>
          </Flex>
          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <RecievedChat>{text}</RecievedChat>
              <Text weight="600" fontSize=" 11px" color="gray1">
                {time && moment(time).format('hh:mm a')}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ConversationRecievedChat;
