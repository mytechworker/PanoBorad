import React from 'react';

import {
  Flex,
  Box,
  ChangeLocation,
  NotificationAlert,
  MinyUserProfile,
} from 'components';
import { MenuOutlined } from '@ant-design/icons';

type Props = {
  onCollapse: (status: boolean) => void;
  collapsed?: boolean;
};

const LayoutHader = ({ onCollapse, collapsed }: Props) => {
  return (
    <Flex justifyContent="space-between">
      <Flex>
        {collapsed && (
          <Box
            onClick={() => onCollapse(!collapsed)}
            className="has-cursor"
            color="white"
            margin="0 15px 0 10px"
          >
            <MenuOutlined style={{ fontSize: '18px' }} />
          </Box>
        )}
        <ChangeLocation />
      </Flex>

      <Flex flexGap="38px" justifyContent="space-between" marginRight="24px">
        {/* <NotificationAlert /> */}
        <Box background="gray7" width="1px" height="56px" />
        <MinyUserProfile />
      </Flex>
    </Flex>
  );
};

export default LayoutHader;
