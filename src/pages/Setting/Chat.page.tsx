import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { SettingSections } from 'components';

export class ChatPage extends PureComponent {
  render() {
    return (
      <>
        <Helmet title="PanoBoard | Chat" />
        <SettingSections activeMenu="Chat" />
      </>
    );
  }
}

export default ChatPage;
