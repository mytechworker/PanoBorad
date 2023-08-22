import { createSelector } from 'reselect';
import {
  ManagementState,
  PermissionsState,
  UsersState,
  UserState,
} from 'types';

const selectManagement = (state: any) => state.management;

export const selectUsers = createSelector(
  [selectManagement],
  (management: ManagementState) => management?.users
);

export const loadAllUsersFetching = createSelector(
  [selectUsers],
  (users: UsersState) => users?.fetching
);

export const selectAllUsers = createSelector(
  [selectUsers],
  (users: UsersState) => users?.data
);

export const selectUser = createSelector(
  [selectManagement],
  (management: ManagementState) => management?.user
);

export const loadUserFetching = createSelector(
  [selectUser],
  (user: UserState) => user?.fetching
);

export const selectUserById = createSelector(
  [selectUser],
  (user: UserState) => user?.data
);

export const selectPermissions = createSelector(
  [selectManagement],
  (management: ManagementState) => management?.permissions
);

export const loadAllPermissionsFetching = createSelector(
  [selectPermissions],
  (permissions: PermissionsState) => permissions?.fetching
);

export const selectAllPermissions = createSelector(
  [selectPermissions],
  (permissions: PermissionsState) => permissions?.data
);

export const selectRoles = createSelector(
  [selectManagement],
  (management: ManagementState) => management?.roles
);
