import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { Box, EmailSignatureForm, SettingSections, Title5 } from 'components';

export class EmailSignaturePage extends PureComponent {
  render() {
    return (
      <>
        <Helmet title="PanoBoard | Email Signature" />
        <SettingSections activeMenu="Email Signature" />
        <Title5 margin="24px 24px">Email Signature</Title5>

        <Box
          background="white"
          margin="0 24px 26px 24px"
          borderRadius="15px"
          minHeight="73vh"
        >
          <EmailSignatureForm />
        </Box>
      </>
    );
  }
}

export default EmailSignaturePage;
