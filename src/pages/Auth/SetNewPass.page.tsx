import React, { PureComponent } from 'react';
import Cookies from 'js-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import queryString from 'query-string';

import { Flex, Text, SetNewPassForm } from 'components';
import connectHelper from 'helpers/connect.helper';
import { authAction } from 'redux/actions';
import { SetNewPasswordResult } from 'types/auth';

const connect = connectHelper((state: any) => ({}));

type Props = {
  promise: any;
  history: any;
  location: any;
};
type State = {
  submitting: boolean;
};

export class SetNewPassPage extends PureComponent<Props, State> {
  query = queryString.parse(this.props.location.search, {});
  state = {
    submitting: false,
  };

  handleSetNewPassword = (new_password: string) => {
    const token = this.query.verify_code?.toString() ?? '';
    this.setState({ submitting: true });
    const { promise, history } = this.props;
    promise(authAction.setNewPassword({ new_password, token }))
      .then((result: SetNewPasswordResult) => {
        const expires = jwt_decode<JwtPayload>(result.access).exp;
        Cookies.set('access_token_pb', result.access, { expires });
        Cookies.set('refresh_token_pb', result.refresh);
        history.push('/dashboard');
      })
      .finally(() => this.setState({ submitting: false }));
  };
  render() {
    const { submitting } = this.state;
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
            marginBottom="30px"
          >
            Set New Password
          </Text>
          <Text color="gray9" marginBottom="73px" fontSize="16px">
            Enter new password for with your account
          </Text>
          <SetNewPassForm
            onSubmit={this.handleSetNewPassword}
            fielderrors={{}}
            submitting={submitting}
          />
        </Flex>
      </Flex>
    );
  }
}

export default connect(SetNewPassPage);
