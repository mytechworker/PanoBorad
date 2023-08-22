import React, { PureComponent } from 'react';

import connectHelper from 'helpers/connect.helper';
import { Flex } from 'components';

const connect = connectHelper((state: any) => ({}));

type Props = {
  promise: any;
};
type State = {};

export class RegisterPage extends PureComponent<Props, State> {
  render() {
    return <Flex alignItems="center">RegisterPage</Flex>;
  }
}

export default connect(RegisterPage);
