import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* mediaSaga() {
  yield takeLatest(ActionTypes.MEDIA_UPLOAD, axiosMiddleware);
}
