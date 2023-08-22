import React, { useEffect } from 'react';
import { FilterOutlined, DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

import { Button } from 'components';

type Props = {
  onFilter?: (info: any) => any;
};

const LocationAnalyticsFilter = ({ onFilter }: Props) => {
  const menu = (
    <Menu onClick={onFilter}>
      <Menu.Item key="number">Number of people</Menu.Item>
      <Menu.Item key="amount">Amount of production</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button htmltype="submit">
        <FilterOutlined />
        Filter
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default LocationAnalyticsFilter;
