import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* settingSaga() {
  yield takeLatest(ActionTypes.LOAD_ALL_MANAGEMENT_SETTING, axiosMiddleware);
  yield takeLatest(ActionTypes.UPDATE_MANAGEMENT_SETTING, axiosMiddleware);
}
