import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* practiceSaga() {
  yield takeLatest(ActionTypes.UPDATE_PRACTICE, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_PRACTICE, axiosMiddleware);
}
