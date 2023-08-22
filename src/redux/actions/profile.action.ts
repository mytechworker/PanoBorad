import ActionTypes from '../actionTypes';

export function getProfile() {
  return {
    method: 'get',
    url: '/mangement/users/me',
    type: ActionTypes.LOAD_PROFILE,
  };
}

export function updateProfile(data: any) {
  return {
    data,
    method: 'patch',
    type: ActionTypes.UPDATE_PROFILE,
    url: `/mangement/users/me`,
  };
}

export function changePassword(data: any) {
  return {
    data,
    method: 'put',
    type: ActionTypes.UPDATE_PASSWORD,
    url: '/auth/change_password',
  };
}
