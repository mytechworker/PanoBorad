import React from 'react';
import {
  BalanceIcon,
  PeopleIcon,
  MessageIcon,
  SettingIcon,
  PhoneIcon,
  SmsIcon,
  AddToQueIcon,
} from 'helpers/icons';

import { Flex, Text } from 'components';

import { SettingHeaderContainer as Container } from './setting.styles';
import { useHistory } from 'react-router';

type Props = {
  activeMenu: string;
};
const SettingSections = ({ activeMenu }: Props) => {
  const history = useHistory();

  const handleNavigation = (url: string) => history.push(`/setting/${url}`);
  return (
    <Container
      as={Flex}
      justifyContent="flex-start"
      background="white"
      height="50px"
    >
      <Flex
        onClick={() => handleNavigation('practice')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Practice' ? 'active-setting has-cursor' : 'has-cursor'
        }
      >
        <BalanceIcon
          height="16px"
          color={activeMenu === 'Practice' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Practice
        </Text>
      </Flex>
      <Flex
        onClick={() => handleNavigation('team-management')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Team Management'
            ? 'active-setting has-cursor'
            : 'has-cursor'
        }
      >
        <PeopleIcon
          height="16px"
          color={activeMenu === 'Team Management' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Team Management
        </Text>
      </Flex>
      <Flex
        onClick={() => handleNavigation('email-signature')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Email Signature'
            ? 'active-setting has-cursor'
            : 'has-cursor'
        }
      >
        <MessageIcon
          height="16px"
          color={activeMenu === 'Email Signature' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Email Signature
        </Text>
      </Flex>
      <Flex
        onClick={() => handleNavigation('integrations')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Integrations'
            ? 'active-setting has-cursor'
            : 'has-cursor'
        }
      >
        <SettingIcon
          height="16px"
          color={activeMenu === 'Integrations' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Integrations
        </Text>
      </Flex>
      <Flex
        onClick={() => handleNavigation('phone-number')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Phone Number'
            ? 'active-setting has-cursor'
            : 'has-cursor'
        }
      >
        <PhoneIcon
          height="16px"
          color={activeMenu === 'Phone Number' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Phone Number
        </Text>
      </Flex>
      {/* <Flex
        onClick={() => handleNavigation('chat')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Chat' ? 'active-setting has-cursor' : 'has-cursor'
        }
      >
        <SmsIcon height="16px" color={activeMenu === 'Chat' && 'primary'} />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Chat
        </Text>
      </Flex> */}
      {/* <Flex
        onClick={() => handleNavigation('online-booking-setting')}
        padding="16px 0"
        minWidth="150px"
        className={
          activeMenu === 'Online Booking'
            ? 'active-setting has-cursor'
            : 'has-cursor'
        }
      >
        <AddToQueIcon
          height="16px"
          color={activeMenu === 'Online Booking' && 'primary'}
        />
        <Text
          paddingLeft="8px"
          weight="700"
          fontSize="13px"
          color="gray1"
          lineHeight="16px"
        >
          Online Booking
        </Text>
      </Flex> */}
    </Container>
  );
};

export default SettingSections;
