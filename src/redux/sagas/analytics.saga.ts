import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* analyticsSaga() {
  yield takeLatest(ActionTypes.LOAD_MAP, axiosMiddleware);
}
