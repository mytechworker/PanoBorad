import React, { useState, useEffect } from 'react';

import {
  DownOutlined,
  FilterOutlined,
  StockOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';

import { ButtonWrapper } from './pipeline.style';
import { Box, Flex, Button } from 'components';
import PipelineFilterForm from './PipelineFilter.form';

import { Menu, Dropdown, Popover } from 'antd';

type Props = {
  onChangeName?: (info: any) => any;
  pipelineName: string;
  onExport: () => void;
  exportLoading: boolean;
  onFilter: any;
  filterLoading: boolean;
  onClearFilters: () => void;
  activeFilters: {
    name: string;
    tagName: string;
    year: string;
    month: string;
  };
};

const PipelineActions = ({
  onChangeName,
  pipelineName,
  onExport,
  exportLoading,
  onFilter,
  filterLoading,
  onClearFilters,
  activeFilters,
}: Props) => {
  const [showFilters, setShowFilters] = useState(false);

  const menu = (
    <Menu
      onClick={onChangeName}
      selectedKeys={[pipelineName]}
      openKeys={[pipelineName]}
    >
      <Menu.Item key="1">Unscheduled hygiene reappointment</Menu.Item>
      <Menu.Item key="2">Unscheduled treatment</Menu.Item>
    </Menu>
  );

  return (
    <Flex flexWrap="wrap">
      <Box marginRight="15px">
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonWrapper>
            <Flex>
              <Box marginRight="12px">
                <StockOutlined />
              </Box>
              {pipelineName
                ? pipelineName === '1'
                  ? 'Unscheduled hygiene reappointment'
                  : 'Unscheduled treatment'
                : 'Pipeline Name'}
              <Box marginLeft="12px">
                <DownOutlined />
              </Box>
            </Flex>
          </ButtonWrapper>
        </Dropdown>
      </Box>
      <Box marginRight="12px">
        <Popover
          placement="bottomLeft"
          title={''}
          content={
            <PipelineFilterForm
              onSubmit={onFilter}
              loading={filterLoading}
              pipelineName={pipelineName}
              onCloseFilters={(change: boolean) => setShowFilters(change)}
              onClearFilters={onClearFilters}
              activeFilters={activeFilters}
            />
          }
          trigger="click"
          visible={showFilters}
          onVisibleChange={(change: boolean) => setShowFilters(change)}
          destroyTooltipOnHide
        >
          <Button onClick={() => setShowFilters(!showFilters)}>
            <FilterOutlined />
            Filter
            <DownOutlined />
          </Button>
        </Popover>
      </Box>
      <Box>
        <Button onClick={onExport} loading={exportLoading}>
          Export <VerticalAlignBottomOutlined />
        </Button>
      </Box>
    </Flex>
  );
};

export default PipelineActions;
