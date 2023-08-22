import React from 'react';
import { Flex, Text, Button, Title5, Box } from 'components';
import EmptyIcon from 'assets/images/intergration/no-twilio.svg';
import { Link } from 'react-router-dom';

const ConversationEmptyTable = () => {
  return (
    <>
      <Box>
        <Title5>Conversation</Title5>
      </Box>
      <Flex flexDirection="column" align="center" height="78vh">
        <Box>
          <Text color="gray8" fontSize="18px" weight="600" marginBottom="11px">
            Your Twilio connection hasn’t been approved!
          </Text>
        </Box>
        <Box>
          <Text color="gray8" fontSize="16px" weight="600" marginBottom="50px">
            Please check your Twilio integreation
          </Text>
        </Box>
        <div>
          <img src={EmptyIcon} />
        </div>
        <Link to="/setting/integrations">
          {' '}
          <Button marginTop="90px">Connect</Button>
        </Link>
      </Flex>
    </>
  );
};

export default ConversationEmptyTable;
