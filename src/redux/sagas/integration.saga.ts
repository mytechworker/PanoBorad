import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* integrationSaga() {
  yield takeLatest(ActionTypes.LOAD_INTEGRATIONS_STATUS, axiosMiddleware);
  yield takeLatest(ActionTypes.DENTRIX_CONNECT, axiosMiddleware);
  yield takeLatest(ActionTypes.DENTRIX_DISCONNECT, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_DENTRIX_LOCATIONS, axiosMiddleware);
  yield takeLatest(ActionTypes.TWILIO_SUBACCOUNT_CONNECT, axiosMiddleware);
  yield takeLatest(ActionTypes.DELETE_TWILIO_DISCONNECT, axiosMiddleware);
}
