import ActionTypes from '../actionTypes';

export function loginEmail(data: { email: string; password: string }) {
  return {
    method: 'post',
    url: '/auth/login/email',
    type: ActionTypes.AUTH_LOGIN_EMAIL,
    data,
  };
}

export function forgetPassword(data: { email: string }) {
  return {
    method: 'post',
    url: '/auth/forget_password',
    type: ActionTypes.AUTH_FORGET_PASSWORD,
    data,
  };
}

export type NewPasswordInfo = {
  token: string;
  new_password: string;
};

export function setNewPassword(data: NewPasswordInfo) {
  return {
    method: 'post',
    url: '/auth/reset_password',
    type: ActionTypes.AUTH_SET_NEW_PASSWORD,
    data,
  };
}
