import React, { PureComponent } from 'react';
import Cookies from 'js-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

import { Flex, Text, LoginForm } from 'components';
import connectHelper from 'helpers/connect.helper';
import {
  appAction,
  authAction,
  locationAction,
  managementAction,
  profileAction,
  settingAction,
} from 'redux/actions';
import { LoginEmailResult } from 'types/auth';
import { LocationData } from 'types';
import { logoutUser } from 'config/axios.config';

const connect = connectHelper((state: any) => ({}));

type Props = {
  promise: any;
  history: any;
};
type State = {
  loading: boolean;
};

export class LoginPage extends PureComponent<Props, State> {
  state = {
    loading: false,
  };
  handleNavigate = () => {
    const { history } = this.props;
    history.push('/auth/forget-password');
  };
  handleLoginEmail = (data: { email: string; password: string }) => {
    const { promise, history } = this.props;
    this.setState({ loading: true });
    promise(authAction.loginEmail(data))
      .then((result: LoginEmailResult) => {
        const expires = jwt_decode<JwtPayload>(result.access).exp ?? 0;
        Cookies.set('expires_access_token_pb', expires.toString() || '');
        Cookies.set('access_token_pb', result.access, { expires });
        Cookies.set('refresh_token_pb', result.refresh);
        promise(profileAction.getProfile());
        promise(managementAction.getPermission());
        promise(locationAction.loadAll()).then((locations: LocationData) => {
          if (locations?.count < 1) return logoutUser();
          promise(appAction.handleSetLocation(locations.data[0])).then(() =>
            promise(settingAction.loadAll()).then(() =>
              history.push('/dashboard')
            )
          );
        });
      })
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    const { loading } = this.state;

    return (
      <Flex
        flexDirection="column"
        height="100vh"
        justifyContent="space-between"
      >
        <Flex flexDirection="column" className="flex-1" minWidth="417px">
          <Text
            color="primary"
            fontSize="26px"
            weight="800"
            height="41"
            marginBottom="4px"
          >
            Let’s Get Started!
          </Text>
          <Text color="gray9" marginBottom="60px">
            Sign in entering the information below
          </Text>
          <LoginForm
            onSubmit={this.handleLoginEmail}
            fielderrors={{}}
            submitting={loading}
            onNavigate={this.handleNavigate}
          />
        </Flex>
        <Text padding="17px 0" weight="600">
          By clicking Signin you agree to our{' '}
          <Text className="has-cursor" color="primary">
            Terms of Service
          </Text>
        </Text>
      </Flex>
    );
  }
}

export default connect(LoginPage);
