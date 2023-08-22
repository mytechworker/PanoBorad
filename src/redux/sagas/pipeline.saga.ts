import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* pipelineSaga() {
  yield takeLatest(ActionTypes.LOAD_PIPELINE_PATIENT_NUMBER, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_PIPELINE_OPPORTUNITY, axiosMiddleware);
  yield takeLatest(ActionTypes.EXPORT_PIPELINE_OPPORTUNITY, axiosMiddleware);
  yield takeLatest(
    ActionTypes.UPDATE_PIPELINE_OPPORTUNITY_STATUS,
    axiosMiddleware
  );
  yield takeLatest(ActionTypes.LOAD_PIPELINE_TAGS, axiosMiddleware);
  yield takeLatest(ActionTypes.CREATE_TAG, axiosMiddleware);
  yield takeLatest(ActionTypes.UPDATE_TAG, axiosMiddleware);
  yield takeLatest(ActionTypes.DELETE_TAG, axiosMiddleware);
  yield takeLatest(ActionTypes.DELETE_PIPELINE_TAGS, axiosMiddleware);
  yield takeLatest(ActionTypes.ADD_PIPELINE_TAG, axiosMiddleware);
  yield takeLatest(ActionTypes.CREATE_PIPELINE_NOTE, axiosMiddleware);
  yield takeLatest(ActionTypes.DELETE_PIPELINE_NOTE, axiosMiddleware);
  yield takeLatest(ActionTypes.UPDATE_PIPELINE_PATIENT, axiosMiddleware);
}
