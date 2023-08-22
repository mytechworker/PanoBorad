import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* reportSaga() {
  yield takeLatest(ActionTypes.LOAD_LOCATION_ANALYTICS_OFFICE, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_REPORT_CANCELLATIONS, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_REPORT_HYGIENE, axiosMiddleware);
  yield takeLatest(
    ActionTypes.LOAD_REPORT_HYGIENE_REAPPOINTMENT,
    axiosMiddleware
  );
  yield takeLatest(ActionTypes.LOAD_REPORT_NEW_PATIENTS, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_REPORT_PRODUCTION, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_REPORT_RECARE, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_REPORT_RESTORATIVE, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_REPORT_VISIT, axiosMiddleware);
  yield takeLatest(ActionTypes.REPORT_SET_HYGIENE_GOAL, axiosMiddleware);
  yield takeLatest(
    ActionTypes.REPORT_SET_HYGEINE_REAPPOINMENT_GOAL,
    axiosMiddleware
  );
  yield takeLatest(ActionTypes.REPORT_SET_NEW_PATIONTS_GOAL, axiosMiddleware);
  yield takeLatest(ActionTypes.REPORT_SET_PRODUCTION_GOAL, axiosMiddleware);
  yield takeLatest(ActionTypes.REPORT_SET_RESTORATIVE_GOAL, axiosMiddleware);
  yield takeLatest(ActionTypes.REPORT_SET_VISIT_GOAL, axiosMiddleware);
}
