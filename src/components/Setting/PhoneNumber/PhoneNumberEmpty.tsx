import React from 'react';
import { Flex, Text, Button } from 'components';
import EmptyIcon from 'assets/images/intergration/no-twilio.svg';
import { Link } from 'react-router-dom';

const PhoneNumberEmptyTable = () => {
  return (
    <Flex flexDirection="column" marginTop="176px" marginBottom="137px">
      <Text color="gray8" fontSize="18px" weight="600" marginBottom="11px">
        Your Twilio connection hasn’t been approved!
      </Text>
      <Text color="gray8" fontSize="16px" weight="600" marginBottom="50px">
        Please check your Twilio integreation
      </Text>
      <div>
        <img src={EmptyIcon} />
      </div>
      <Link to="/setting/integrations">
        {' '}
        <Button marginTop="90px">Connect</Button>
      </Link>
    </Flex>
  );
};

export default PhoneNumberEmptyTable;
