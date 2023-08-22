import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* authSaga() {
  yield takeLatest(ActionTypes.AUTH_LOGIN_EMAIL, axiosMiddleware);
  yield takeLatest(ActionTypes.AUTH_FORGET_PASSWORD, axiosMiddleware);
  yield takeLatest(ActionTypes.AUTH_SET_NEW_PASSWORD, axiosMiddleware);
}
