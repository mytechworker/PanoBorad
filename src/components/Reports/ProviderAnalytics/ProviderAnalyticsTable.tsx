import React from 'react';
import numeral from 'numeral';
import { Table } from 'antd';
import { ProviderListItemModel } from 'types';
import { Text, Flex } from 'components';
import { ProviderAnalyticsWrapper } from './providerAnalytics.style';

type Props = {
  list: ProviderListItemModel[];
  pageSize: number;
  count: number;
  changePage: (item: number) => void;
  current: number;
};
const ProviderAnalyticsTable = ({
  list,
  pageSize,
  count,
  current,
  changePage,
}: Props) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      render: (_: any, item: any) => <>{item.id}</>,
    },
    {
      title: 'Provider',
      dataIndex: 'full_name',
      render: (_: any, item: any) => <Text>{item.full_name}</Text>,
    },

    {
      title: 'Gross Prod',
      dataIndex: 'gross',
      key: 'gross',
      render: (_: any, item: any) => <> {numeral(item.gross).format('0,0')}</>,
    },
    {
      title: 'Net Prod',
      dataIndex: 'net',
      key: 'net',
      render: (_: any, item: any) => <> {numeral(item.net).format('0,0')}</>,
    },
    {
      title: 'Adjustment',
      dataIndex: 'adjustment',
      key: 'adjustment',
      render: (_: any, item: any) => (
        <> {numeral(item.adjustment).format('0,0')}</>
      ),
    },
    {
      title: 'Collection',
      dataIndex: 'collection',
      key: 'collection',
      render: (_: any, item: any) => (
        <> {numeral(item.collection).format('0,0')}</>
      ),
    },
    {
      title: 'Location Name',
      dataIndex: 'locations__title',
      key: 'locations__title',
    },
    {
      title: 'Average Daily Production',
      dataIndex: 'daily_average',
      key: 'daily_average',
      render: (_: any, item: any) => (
        <> {numeral(item.daily_average).format('0,0')}</>
      ),
    },
    {
      title: 'Month-to-Date Production',
      dataIndex: 'month_to_date',
      key: 'month_to_date',
      render: (_: any, item: any) => (
        <> {numeral(item.month_to_date).format('0,0')}</>
      ),
    },
    {
      title: 'Acceptance Rate',
      dataIndex: 'acceptance_rate',
      key: 'acceptance_rate',
      render: (_: any, item: any) => (
        <> {numeral(item.acceptance_rate).format('0,0')}</>
      ),
    },
  ];

  return (
    <ProviderAnalyticsWrapper
      rowKey="id"
      as={Table}
      columns={columns}
      dataSource={list}
      pagination={{
        current: current,
        pageSize: pageSize,
        total: count,
        onChange: (current: number) => changePage(current),
        showSizeChanger: false,
      }}
    />
  );
};
export default ProviderAnalyticsTable;
