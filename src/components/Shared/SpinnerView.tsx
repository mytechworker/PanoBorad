import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { Flex, Text } from 'components';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

type Props = {
  height: string;
  loadingText?: string;
};
const SpinnerView = ({ height, loadingText }: Props) => {
  return (
    <Flex height={height}>
      <Flex flexDirection="column" flexGap="10px">
        <Spin indicator={antIcon} />
        {loadingText && <Text>{loadingText}</Text>}
      </Flex>
    </Flex>
  );
};

export default SpinnerView;
