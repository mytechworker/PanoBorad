import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';

import { Title5, SpinnerView } from 'components';
import { locationSelector, managementSelector } from 'redux/selectors';
import { TabPaneWrapper } from './shared.styles';
import { AddEmployeeForm } from 'components';
import connectHelper from 'helpers/connect.helper';
import { managementAction } from 'redux/actions';

const connect = connectHelper(
  createStructuredSelector({
    permissions: managementSelector.selectAllPermissions,
    fetchingPermissions: managementSelector.loadAllUsersFetching,
    locations: locationSelector.selectAllLocations,
    user: managementSelector.selectUserById,
    fetching: managementSelector.loadUserFetching,
  })
);

type Props = {
  promise?: any;
  openModal: boolean;
  onCancel: any;
  onAddUser: any;
  onEditUser: any;
  locations: any;
  user: any;
};
const EmployeeModal = ({
  openModal,
  onCancel,
  addMode,
  onAddUser,
  onEditUser,
  permissions,
  locations,
  user,
  fetching,
}: any) => {
  const permissionsList = get(permissions, 'data', []);
  const locationsList = get(locations, 'data', []);

  return (
    <Modal
      visible={openModal}
      closable={true}
      footer={false}
      centered
      onCancel={onCancel}
      destroyOnClose
      width="822px"
    >
      <Title5 marginBottom="15px">Team Management</Title5>
      <TabPaneWrapper>
        {fetching ? (
          <SpinnerView height="500px" />
        ) : (
          <AddEmployeeForm
            addMode={addMode}
            onSubmit={(data: any) => {
              if (addMode) {
                onAddUser(data);
              } else {
                onEditUser(data, user?.pk);
              }
            }}
            userInfo={user}
            key={Math.random()}
            permissionsList={permissionsList}
            locationsList={locationsList}
            onRemoveImage={(data: any) => onEditUser(data, user?.pk)}
          />
        )}
      </TabPaneWrapper>
    </Modal>
  );
};

export default connect(EmployeeModal);
