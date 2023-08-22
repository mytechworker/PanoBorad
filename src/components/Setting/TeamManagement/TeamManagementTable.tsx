import React from 'react';
import { Table } from 'antd';

import { Flex, Text } from 'components';
import { User } from 'types';

import Edit from 'assets/images/edit-icon.jpg';
import { ImgTableStyle } from './teamManagement.style';

type Props = {
  userData: User[];
  count: number;
  changePage: any;
  current: number;
  pageSize: number;
  openEditModal: any;
  passUserInfo: any;
};

const TeamManagementTable = ({
  userData,
  count,
  changePage,
  current,
  pageSize,
  openEditModal,
  passUserInfo,
}: Props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, item: any) => {
        const splitFirstName = item?.first_name[0].split([0]);
        const splitLastName = item?.last_name[0].split([0]);
        return (
          <Flex justifyContent="flex-start">
            {item?.photo?.media ? (
              <ImgTableStyle
                src={process.env.REACT_APP_BASE_URL + item?.photo?.media}
                alt=""
              />
            ) : (
              <Text className="name-icon">
                {splitFirstName[0]}
                {splitLastName[0]}
              </Text>
            )}
            <Text>
              {item?.first_name} {item?.last_name}
            </Text>
          </Flex>
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (_: any, item: any) => {
        return (
          <img
            onClick={openEditModal}
            className="has-cursor"
            src={Edit}
            alt="Avatar"
            id="editIcon"
          />
        );
      },
    },
  ];
  return (
    <>
      <Table
        className="table"
        onRow={(r) => ({
          onClick: (e: any) => {
            if (e.target.id && e.target.id == 'editIcon') {
              passUserInfo(r);
            }
          },
        })}
        rowKey="pk"
        columns={columns}
        dataSource={userData}
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

export default TeamManagementTable;
