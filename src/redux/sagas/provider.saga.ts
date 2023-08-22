import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* providerSaga() {
  yield takeLatest(ActionTypes.LOAD_PROVIDER_LIST, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_PROVIDER_PRODUCTION, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_PROVIDER_LIST_EXPORT, axiosMiddleware);
}
