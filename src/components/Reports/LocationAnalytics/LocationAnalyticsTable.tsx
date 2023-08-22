import React, { useEffect, useState } from 'react';
import numeral from 'numeral';
import Edit from 'assets/images/edit-icon.jpg';
import { Pagination, Table } from 'antd';

import { LocationAnalyticTable } from '../reports.styles';
import { size } from 'lodash';

type Props = {
  officeInfo: any;
  count: number;
  changePage: any;
  current: number;
  pageSize: number;
};

const ProviderAnalyticsTable = ({
  officeInfo,
  count,
  changePage,
  current,
  pageSize,
}: Props) => {
  const columns = [
    {
      title: 'Location',
      dataIndex: 'title',
      key: 'title',
      render(_: any, item: any) {
        return (
          <div style={{ color: '#5A8DEE', fontSize: '13px' }}>
            {item?.title}
          </div>
        );
      },
    },
    {
      title: 'By Office',
      children: [
        {
          title: 'Gross Prod',
          dataIndex: 'gross',
          key: 'gross',
          render(_: any, item: any) {
            return <>{numeral(item.gross).format('0,0')}</>;
          },
        },
        {
          title: 'ADJ',
          dataIndex: 'adjustment',
          key: 'adjustment',
          render(_: any, item: any) {
            return <>{numeral(item.adjustment).format('0,0')}</>;
          },
        },
        {
          title: 'ADJ% if Prod',
          dataIndex: 'adjustment_rate',
          key: 'adjustment_rate',
          render(_: any, item: any) {
            return <>{numeral(item.adjustment_rate).format('0,0')}</>;
          },
        },
        {
          title: 'Net Prod',
          dataIndex: 'net',
          key: 'net',
          render(_: any, item: any) {
            return <>{numeral(item.net).format('0,0')}</>;
          },
        },
        {
          title: 'Coll',
          dataIndex: 'collection',
          key: 'collection',
          render(_: any, item: any) {
            return <>{numeral(item.collection).format('0,0')}</>;
          },
        },
        {
          title: 'Coll%',
          dataIndex: 'collection_rate',
          key: 'collection_rate',
          render(_: any, item: any) {
            return <>{numeral(item.collection_rate).format('0,0')}</>;
          },
        },
        {
          title: 'PT.Visit',
          dataIndex: 'patient_visit',
          key: 'patient_visit',
          render(_: any, item: any) {
            return <>{numeral(item.patient_visit).format('0,0')}</>;
          },
        },
        {
          title: 'NPT.Visit',
          dataIndex: 'new_patient_visit',
          key: 'new_patient_visit',
          render(_: any, item: any) {
            return <>{numeral(item.new_patient_visit).format('0,0')}</>;
          },
        },
        {
          title: 'ACT.PT.W/RSWN',
          dataIndex: 'acceptance_rate',
          key: 'acceptance_rate',
          render(_: any, item: any) {
            return <>{numeral(item.acceptance_rate).format('0,0')}</>;
          },
        },
      ],
    },
  ];

  return (
    <>
      <LocationAnalyticTable
        as={Table}
        rowKey="id"
        columns={columns}
        dataSource={officeInfo}
        pagination={{
          current: current,
          pageSize: pageSize,
          total: count,
        }}
        onChange={changePage}
      />
    </>
  );
};

export default ProviderAnalyticsTable;
