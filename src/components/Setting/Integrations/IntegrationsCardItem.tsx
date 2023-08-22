import React from 'react';
import { CheckOutlined, SettingOutlined } from '@ant-design/icons';

import { Box, Text, Button, Flex } from 'components';

type Props = {
  imageIcon: string;
  title: string;
  onAction: () => void;
  onShowLocations?: () => void;
  connected: boolean;
};
const IntegrationsCardItem = ({
  imageIcon,
  title,
  onAction,
  connected,
  onShowLocations,
}: Props) => {
  return (
    <Flex
      borderRadius="15px"
      background="primaryLight"
      padding="24px"
      flexDirection="column"
      justifyContent="space-between"
      height="304px"
      width="375px"
      position="relative"
    >
      {title === 'Dentrix' && connected && (
        <Box
          className="has-cursor"
          position="absolute"
          top="24px"
          right="24px"
          color="gray1"
          onClick={onShowLocations}
        >
          <SettingOutlined />
        </Box>
      )}
      <Box>
        <img src={imageIcon} alt={title} />
      </Box>
      <Text weight="700" fontSize="20px">
        {title}
      </Text>
      <Text align="center">Connect your location's {title} Account</Text>
      <Button type="tertiary" width="100%" onClick={() => onAction()}>
        <Text color={connected ? 'green2' : ''}>
          {connected ? 'Connected' : 'Connect'}
          {connected && <CheckOutlined style={{ paddingLeft: '5px' }} />}
        </Text>
      </Button>
    </Flex>
  );
};

export default IntegrationsCardItem;
