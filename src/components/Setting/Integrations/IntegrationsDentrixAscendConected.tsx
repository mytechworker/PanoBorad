import React from 'react';

import { Box, Title5, Flex, Text, Button } from 'components';

import dentrix from 'assets/images/intergration/dentrix.svg';

type Props = {
  onHideModal: () => void;
  onDisconnect: () => void;
  loading: boolean;
};
const IntegrationsDentrixAscendConected = ({
  onHideModal,
  onDisconnect,
  loading,
}: Props) => {
  return (
    <>
      <Box background="lavender" padding="25px">
        <Title5>Dentrixascend Connection</Title5>
        <Flex margin="40px 0">
          <img src={dentrix} alt="Dentrix Logo" />
        </Flex>
      </Box>
      <Box padding="25px">
        <Flex margin="37px auto 80px" width="280px">
          <Text align="center" fontSize="16px" weight="700">
            Are you sure you want to disconnect the connection?
          </Text>
        </Flex>
        <Flex flexDirection="justify-content" flexGap="42px">
          <Button onClick={onHideModal} width="100%" type="secondary">
            No
          </Button>
          <Button onClick={onDisconnect} width="100%" loading={loading}>
            Yes
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default IntegrationsDentrixAscendConected;
