import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* locationSaga() {
  yield takeLatest(ActionTypes.LOAD_ALL_LOCATIONS, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_LOCATIONS, axiosMiddleware);
  yield takeLatest(ActionTypes.PATCH_LOCATIONS, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_ALL_STATES, axiosMiddleware);
}
