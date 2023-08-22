import React from 'react';

import { Box, Title5, Flex, Text, Button } from 'components';

import Twilio from 'assets/images/intergration/Twilio-logo.svg';
import { ColorWrapper } from '../setting.styles';

type Props = {
  onHideModal: () => void;
  onDisconnect: () => void;
  loading: boolean;
};
const IntegrationsTwilioConected = ({
  onHideModal,
  onDisconnect,
  loading,
}: Props) => {
  return (
    <>
      <ColorWrapper>
        <Box>
          <Title5>Twilio Connection</Title5>
          <Flex margin="43px 0">
            <img src={Twilio} alt="Twilio Logo" />
          </Flex>
        </Box>
        <Box>
          <Flex margin="85px auto 78px" width="280px">
            <Text align="center" fontSize="16px" weight="700">
              Are you sure you want to disconnect the connection?
            </Text>
          </Flex>
          <Flex flexDirection="justify-content" flexGap="42px">
            <Button
              onClick={onHideModal}
              width="100%"
              height="50px"
              type="secondary"
              className="b-color b-size"
            >
              No
            </Button>

            <Button
              onClick={onDisconnect}
              width="100%"
              loading={loading}
              className=" b-size"
            >
              Yes
            </Button>
          </Flex>
        </Box>
      </ColorWrapper>
    </>
  );
};

export default IntegrationsTwilioConected;
