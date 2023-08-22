import React from 'react';
import { Box, Flex, Text } from 'components';
import { SendChat } from './conversation.style';
import moment from 'moment';
type Props = {
  text?: string;
  time: string;
};
const ConversationSendChat = ({ text, time }: Props) => {
  return (
    <Box
      marginBottom="10px"
      paddingBottom="14px"
      borderColor="gray2"
      width="100%"
    >
      <Flex justifyContent="space-between" direction="rtl">
        <Flex>
          <Box>
            <Flex flexDirection="column" alignItems="flex-end">
              <SendChat>{text}</SendChat>
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

export default ConversationSendChat;
