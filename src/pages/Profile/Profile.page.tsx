import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import connectHelper from 'helpers/connect.helper';
import {
  Box,
  Flex,
  Title5,
  ProfileForm,
  ChangePasswordForm,
  SpinnerView,
} from 'components';
import { ProfileWrapper as Wrapper, TabPaneWrapper } from './profile.style';
import { profileSelector } from 'redux/selectors';
import { User } from 'types';
import { profileAction } from 'redux/actions';
import { successNotification } from 'helpers';

const connect = connectHelper(
  createStructuredSelector({
    profileInfo: profileSelector.selectProfileInfo,
    fetching: profileSelector.loadProfileFetching,
  })
);

const { TabPane } = Tabs;

type Props = {
  promise: any;
  history: any;
  profileInfo: User;
  fetching: boolean;
};

type State = {
  loading: boolean;
};

export class ProfilePage extends PureComponent<Props, State> {
  state = {
    loading: false,
  };

  handleUpdateProfile = (data: any) => {
    const { promise } = this.props;
    promise(profileAction.updateProfile(data))
      .then((res: any) => {
        successNotification({
          description: 'updated successfully!',
        });
        promise(profileAction.getProfile());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleChangePassword = (data: any) => {
    const { promise } = this.props;
    promise(profileAction.changePassword(data)).then((res: any) => {
      successNotification({
        description: 'updated successfully!',
      });
    });
  };

  render() {
    const { profileInfo, fetching } = this.props;
    const { loading } = this.state;
    return (
      <Wrapper>
        <Helmet title="PanoBoard | Profile" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="10px 25px"
        >
          <Box>
            <Title5 style={{ weight: '700' }}>Profile</Title5>
          </Box>
        </Flex>
        <Box
          background="white"
          margin="15px 25px"
          padding="10px"
          borderRadius="15px"
          height="100vh"
        >
          {fetching ? (
            <SpinnerView height="300px" />
          ) : (
            <TabPaneWrapper>
              <Tabs
                defaultActiveKey="Personal Info"
                tabPosition="left"
                className="modal-tab"
              >
                <TabPane
                  tab={<span className="modal-tab">Personal Info</span>}
                  key="personal-info"
                >
                  <ProfileForm
                    profileInfo={profileInfo}
                    fielderrors={{}}
                    submitting={loading}
                    onSubmit={this.handleUpdateProfile}
                    onDeleteImage={this.handleUpdateProfile}
                  />
                </TabPane>
                <TabPane
                  tab={<span className="modal-tab">Change Password</span>}
                  key="change-password"
                >
                  <ChangePasswordForm
                    fielderrors={{}}
                    onSubmit={(data: any) => this.handleChangePassword(data)}
                  />
                </TabPane>
              </Tabs>
            </TabPaneWrapper>
          )}
        </Box>
      </Wrapper>
    );
  }
}

export default connect(ProfilePage);
