import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* phoneNumberSaga() {
  yield takeLatest(ActionTypes.LOAD_ALL_PHONE_NUMBER, axiosMiddleware);
  yield takeLatest(ActionTypes.DELETE_PHONE_NUMBER, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_AVAILABLE_PHONE_NUMBER, axiosMiddleware);
  yield takeLatest(ActionTypes.CREATE_PHONE_NUMBER, axiosMiddleware);
  yield takeLatest(ActionTypes.UPDATE_PHONE_NUMBER, axiosMiddleware);
  yield takeLatest(ActionTypes.CREATE_PHONE_NUMBER_SMS, axiosMiddleware);
}
