import React, { useState } from 'react';
import { Table } from 'antd';
import { Radio } from 'antd';
import { Flex, Text, SpinnerView, PhoneNumberUpdateNumber } from 'components';
import { PhoneNumberWrapper } from '../setting.styles';

import Edit from 'assets/images/edit-icon.jpg';
import Delete from 'assets/images/delete-icon.png';

type Props = {
  phoneNumberData?: any;
  count?: number;
  changePage?: any;
  current?: number;
  pageSize?: number;
  openEditModal?: any;
  passUserInfo?: any;
  onDelete: (item: number) => void;
  phoneNumberId: number;
  phoneNumber: any;
  setPhoneNumber: any;
  onCancel: () => void;
  onUpdate: any;
  isEditting: boolean;
};

const PhoneNumberTable = ({
  phoneNumberData,
  onCancel,
  onDelete,
  phoneNumberId,
  phoneNumber,
  setPhoneNumber,
  onUpdate,
  isEditting,
  count,
  changePage,
  current,
  pageSize,
}: Props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, item: any) => {
        return (
          <Flex justifyContent="flex-start">
            {phoneNumber?.pk === item?.pk ? (
              <PhoneNumberUpdateNumber
                onCancel={onCancel}
                loading={isEditting}
                numberName={phoneNumber.name}
                onUpdatePhoneNumber={(name: string, id: number) =>
                  onUpdate(name, item.pk)
                }
              />
            ) : (
              <Text>{item?.name}</Text>
            )}
          </Flex>
        );
      },
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (_: any, item: any) => {
        return (
          <Flex justifyContent="flex-start">
            <Text>{item?.phone_number}</Text>
          </Flex>
        );
      },
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (_: any, item: any) => {
        return (
          <Flex justifyContent="space-around">
            <img
              onClick={() => setPhoneNumber(item)}
              className="has-cursor"
              src={Edit}
              alt="Avatar"
              id="editIcon"
            />
            {phoneNumberId === item.pk ? (
              <SpinnerView height="20px" />
            ) : (
              <img
                onClick={() => onDelete(item.pk)}
                className="has-cursor"
                src={Delete}
                alt="Avatar"
                id="delete"
              />
            )}
          </Flex>
        );
      },
    },
  ];
  return (
    <>
      <PhoneNumberWrapper
        className="table"
        as={Table}
        rowKey="pk"
        columns={columns}
        dataSource={phoneNumberData}
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

export default PhoneNumberTable;
