import { AllUsers, User, Role } from 'types';

export interface ManagementState {
  users: UsersState;
  user: UserState;
  permissions: PermissionsState;
  roles: RoleState;
}

export interface UsersState {
  data?: AllUsers;
  fetching?: boolean;
}

export interface UserState {
  data?: User;
  fetching?: boolean;
}

export interface PermissionsState {
  data?: User;
  fetching?: boolean;
}
export interface RoleState {
  data?: Role[];
  fetching?: boolean;
}
