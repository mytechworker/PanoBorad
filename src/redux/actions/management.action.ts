import ActionTypes from '../actionTypes';

export function getAllUsers(params: any) {
  return {
    method: 'get',
    url: `/mangement/users`,
    type: ActionTypes.LOAD_ALL_USERS,
    params,
  };
}

export function getUser(userId: number) {
  return {
    method: 'get',
    url: `/mangement/users/${userId}`,
    type: ActionTypes.LOAD_USER,
  };
}
export function addUsers(data: any) {
  return {
    method: 'post',
    url: '/mangement/users',
    type: ActionTypes.CREATE_USERS,
    data,
  };
}

export function getPermission() {
  return {
    method: 'get',
    url: '/mangement/permissions',
    type: ActionTypes.LOAD_ALL_PERMISSIONS,
  };
}
export function getRoles() {
  return {
    method: 'get',
    url: '/mangement/users/roles',
    type: ActionTypes.LOAD_USER_ROLES,
  };
}

export function editUser(data: any, id: number) {
  return {
    method: 'patch',
    url: `/mangement/users/${id}`,
    type: ActionTypes.UPDATE_USER,
    data,
  };
}
