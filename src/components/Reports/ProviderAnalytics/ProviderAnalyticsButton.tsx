import React from 'react';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';

import { Button } from 'components';

type Params = {
  onClick: () => void;
  loading: boolean;
};
const ProviderAnalyticsButton = ({ onClick, loading }: Params) => {
  return (
    <div>
      <Button onClick={onClick} loading={loading} htmlType="submit">
        Export <VerticalAlignBottomOutlined />
      </Button>
    </div>
  );
};

export default ProviderAnalyticsButton;
