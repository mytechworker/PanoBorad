import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* managementSaga() {
  yield takeLatest(ActionTypes.LOAD_ALL_USERS, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_USER, axiosMiddleware);
  yield takeLatest(ActionTypes.CREATE_USERS, axiosMiddleware);
  yield takeLatest(ActionTypes.UPDATE_USER, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_ALL_PERMISSIONS, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_USER_ROLES, axiosMiddleware);
}
