import React from 'react';
import { Menu, Dropdown } from 'antd';
import { useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';

import { Flex, Text } from 'components';
import { ArrowIcon } from 'helpers/icons';
import { profileSelector } from 'redux/selectors';

import { AvatarWrapper } from './shared.styles';
import Avatar from 'assets/images/avatar.png';
import { useHistory } from 'react-router-dom';
import { logoutUser } from 'config/axios.config';
import styled from 'styled-components';

export const DropdownWrapper = styled.div`
@media (max-width: 767px) {
  .ant-dropdown-trigger.has-cursor {
    width:auto;
    span.wAQVI {
      display:none
    }
  }
}
`;

const MinyUserProfile = () => {
  const history = useHistory();
  const { data, fetching } = useSelector(profileSelector.selectProfile);
  const userImage = data?.photo?.media
    ? process.env.REACT_APP_BASE_URL + data?.photo?.media
    : '';

  const profileActions = (
    <Menu>
      <Menu.Item key="profile" onClick={() => history.push('/profile')}>
        Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => logoutUser()}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <DropdownWrapper>
      <Dropdown overlay={profileActions} className="has-cursor">
        <Flex width="182px" flexGap="14px" justifyContent="space-between">
          <AvatarWrapper>
            {data?.photo?.media && <img src={userImage} alt="Avatar" />}
          </AvatarWrapper>
          <Text color="white">
            {data?.first_name} {data?.last_name}
          </Text>
          <ArrowIcon />
        </Flex>
      </Dropdown>
    </DropdownWrapper>
  );
};

export default MinyUserProfile;
