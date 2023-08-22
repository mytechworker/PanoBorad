import React, { PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

import connectHelper from 'helpers/connect.helper';
import { managementAction } from 'redux/actions';
import { appSelector, managementSelector } from 'redux/selectors';
import { AllUsers, LocationModel } from 'types';
import {
  Box,
  Text,
  Title5,
  Flex,
  Button,
  TeamManagementTable,
  EmployeeModal,
  TeamManagementSearchForm,
  TeamManagementSelectRoleForm,
  SettingSections,
  SpinnerView,
} from 'components';
import { TeamManagementWrapper as Wrapper } from './setting.styles';

const connect = connectHelper(
  createStructuredSelector({
    users: managementSelector.selectAllUsers,
    fetching: managementSelector.loadAllUsersFetching,
    location: appSelector.selectLocationInfo,
  })
);

type Props = {
  promise: any;
  history: any;
  users: AllUsers;
  fetching: boolean;
  location: LocationModel;
};
type State = {
  openModal: boolean;
  current_page: number;
  page_size: number;
  addMode: boolean;
};

export class TeamManagementPage extends PureComponent<Props, State> {
  state = {
    openModal: false,
    current_page: 1,
    page_size: 10,
    addMode: true,
  };

  componentDidMount() {
    const { promise, location } = this.props;
    const { current_page, page_size } = this.state;
    location &&
      Promise.all([
        promise(
          managementAction.getAllUsers({
            page: current_page,
            page_size,
            locations__id__in: location.pk,
          })
        ),
        promise(managementAction.getPermission()),
        promise(managementAction.getRoles()),
      ]);
  }

  handlePageChange = (pagination: any) => {
    const { promise, location } = this.props;
    const { page_size } = this.state;
    this.setState({ current_page: pagination?.current });
    location &&
      promise(
        managementAction.getAllUsers({
          page: pagination?.current,
          page_size,
          locations__id__in: location.pk,
        })
      );
  };

  employeeModal = (openModal: boolean, addMode: boolean) => {
    this.setState({ openModal, addMode });
  };

  passIdToModal = (data: any) => {
    const { promise } = this.props;
    promise(managementAction.getUser(data?.pk));
  };

  handleFilterSearch = (searchValue: any) => {
    const { promise, location } = this.props;
    const { page_size } = this.state;

    location &&
      promise(
        managementAction.getAllUsers({
          page: 1,
          page_size,
          locations__id__in: location.pk,
          search: searchValue,
        })
      );
  };

  handleAdduser = (data: any) => {
    const { promise, location } = this.props;
    const { current_page, page_size } = this.state;

    promise(managementAction.addUsers(data)).then((result: any) => {
      if (result) {
        this.setState({ openModal: false });
        location &&
          promise(
            managementAction.getAllUsers({
              page: current_page,
              page_size,
              locations__id__in: location.pk,
            })
          );
        promise(managementAction.getPermission());
      }
    });
  };

  handleEdituser = (data: any, id: any) => {
    if (data.password === '') {
      delete data.password;
    }
    const { promise, location } = this.props;
    const { current_page, page_size } = this.state;

    promise(managementAction.editUser(data, id)).then((result: any) => {
      if (result) {
        this.setState({ openModal: false });
        location &&
          promise(
            managementAction.getAllUsers({
              page: current_page,
              page_size,
              locations__id__in: location.pk,
            })
          );
        promise(managementAction.getPermission());
      }
    });
  };

  handleSelectRole = (value: any) => {
    const { promise, location } = this.props;
    const { page_size } = this.state;
    location &&
      promise(
        managementAction.getAllUsers({
          page: 1,
          page_size,
          role: value !== 0 ? value : null,
          locations__id__in: location.pk,
        })
      );
  };

  render() {
    const { openModal, current_page, page_size, addMode } = this.state;
    const { users, fetching } = this.props;

    return (
      <Wrapper>
        <Helmet title="PanoBoard | Team Management" />

        <SettingSections activeMenu="Team Management" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="10px 25px"
        >
          <Box>
            <Title5>Setting</Title5>
          </Box>
          <Box>
            <Flex justifyContent="space-between">
              <TeamManagementSelectRoleForm
                selectRole={(value: any) => this.handleSelectRole(value)}
              />
              <Box margin="0 10px">
                <TeamManagementSearchForm
                  onSearch={(searchValue: any) =>
                    this.handleFilterSearch(searchValue)
                  }
                />
              </Box>
              <Button
                onClick={() => this.employeeModal(true, true)}
                htmlType="submit"
              >
                + Add Employee
              </Button>
              <EmployeeModal
                onCancel={() => this.employeeModal(false, true)}
                openModal={openModal}
                addMode={addMode}
                onAddUser={(data: any) => this.handleAdduser(data)}
                onEditUser={(data: any, id: any) =>
                  this.handleEdituser(data, id)
                }
              />
            </Flex>
          </Box>
        </Flex>
        <Box
          background="white"
          margin="15px 25px"
          padding="10px"
          borderRadius="15px"
        >
          <Flex flexDirection="row" justifyContent="flex-start">
            <Title5 margin="10px">Team</Title5>
            {users?.count && (
              <Text style={{ color: '#9C9C9C' }}>{users?.count} Employees</Text>
            )}
          </Flex>
          {fetching ? (
            <SpinnerView height="300px" />
          ) : (
            <TeamManagementTable
              changePage={this.handlePageChange}
              passUserInfo={(data: any, id: any) => {
                this.passIdToModal(data);
              }}
              userData={users?.data}
              count={users?.count}
              current={current_page}
              pageSize={page_size}
              openEditModal={() => this.employeeModal(true, false)}
            />
          )}
        </Box>
      </Wrapper>
    );
  }
}

export default connect(TeamManagementPage);
