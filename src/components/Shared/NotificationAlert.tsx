import React from 'react';

import { Flex } from 'components';
import { NotifIcon } from 'helpers/icons';

import { HasNotif } from './shared.styles';

const NotificationAlert = () => {
  return (
    <Flex position="relative" className="has-cursor">
      <NotifIcon />
      <HasNotif />
    </Flex>
  );
};

export default NotificationAlert;
