import React from 'react';

import { Box, Flex } from 'components';
import { ImgStyle } from './layouts.style';
import backgroundImage from 'assets/images/BG.png';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

type Props = {
  children: any;
};

const AuthLayout = ({ children }: Props) => {
  const history = useHistory();
  const refresh = Cookies.get('refresh_token_pb');
  if (refresh) history.push('/dashboard');

  return (
    <Flex justifyContent="space-between" height="100vh">
      <Box style={{ flex: 1 }} height="100%">
        <ImgStyle src={backgroundImage} alt="" />
      </Box>
      <Box minWidth="512px" padding="0 70px">
        {children}
      </Box>
    </Flex>
  );
};

export default AuthLayout;
