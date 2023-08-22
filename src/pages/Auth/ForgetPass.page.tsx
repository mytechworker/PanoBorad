import React, { PureComponent } from 'react';

import { Flex, Text, ForgetPassForm } from 'components';
import connectHelper from 'helpers/connect.helper';
import { authAction } from 'redux/actions';

const connect = connectHelper((state: any) => ({}));

type Props = {
  promise: any;
  history: any;
  location: any;
};
type State = {
  requested: boolean;
  submitting: boolean;
};

export class ForgetPassPage extends PureComponent<Props, State> {
  state = {
    requested: false,
    submitting: false,
  };

  handleForgetPassword = (data: { email: string }) => {
    const { promise, history } = this.props;
    this.setState({ submitting: true });
    promise(authAction.forgetPassword(data))
      .then(() => this.setState({ requested: true }))
      .finally(() => this.setState({ submitting: false }));
  };

  render() {
    const { submitting, requested } = this.state;
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
            Forget Password?
          </Text>
          {requested ? (
            <Text color="gray9" marginBottom="21px" fontSize="16px">
              Please check your email to set new password
            </Text>
          ) : (
            <>
              <Text color="gray9" marginBottom="21px" fontSize="16px">
                Enter your email address associated with your account
              </Text>
              <Text color="gray9" marginBottom="120px" fontSize="16px">
                We will email you a link to reset your password
              </Text>
              <ForgetPassForm
                onSubmit={this.handleForgetPassword}
                submitting={submitting}
              />
            </>
          )}
        </Flex>
      </Flex>
    );
  }
}

export default connect(ForgetPassPage);
