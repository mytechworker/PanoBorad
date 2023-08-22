import React from 'react';
import { useHistory } from 'react-router';

import { Flex, Text } from 'components';
import {
  NotifactionIcon,
  CalendarIcon,
  BuildIcon,
  WidgetIcon,
} from 'helpers/icons';

import { Container } from '../online-booking.style';

type Props = {
  activeMenu: string;
};
const OnlineBookingSections = ({ activeMenu }: Props) => {
  const history = useHistory();

  const handleNavigation = (url: string) =>
    history.push(`/online-booking/${url}`);
  return (
    <Container
      as={Flex}
      justifyContent="flex-start"
      background="white"
      height="50px"
    >
      <Flex
        onClick={() => handleNavigation('notification')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Notification'
            ? 'active-setting has-cursor'
            : 'has-cursor'
        }
      >
        <NotifactionIcon
          height="16px"
          color={activeMenu === 'Notification' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Notification
        </Text>
      </Flex>
      <Flex
        onClick={() => handleNavigation('calendar')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Calendar' ? 'active-setting has-cursor' : 'has-cursor'
        }
      >
        <CalendarIcon
          height="16px"
          color={activeMenu === 'Calendar' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Calendar
        </Text>
      </Flex>
      <Flex
        onClick={() => handleNavigation('customization')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Customization'
            ? 'active-setting has-cursor'
            : 'has-cursor'
        }
      >
        <BuildIcon
          height="16px"
          color={activeMenu === 'Customization' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Customization
        </Text>
      </Flex>
      {/* <Flex
        onClick={() => handleNavigation('widgets')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Widgets' ? 'active-setting has-cursor' : 'has-cursor'
        }
      >
        <WidgetIcon
          height="16px"
          color={activeMenu === 'Widgets' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Widgets
        </Text>
      </Flex> */}
    </Container>
  );
};

export default OnlineBookingSections;
