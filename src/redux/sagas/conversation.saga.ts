import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* conversationSaga() {
  yield takeLatest(
    ActionTypes.LOAD_ALL_CONVERSATION_PATIENT_NUMBER,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_CONVERSATION_PATIENT_NUMBER,
    axiosMiddleware
  );
  yield takeLatest(ActionTypes.LOAD_PATIENT_NUMBER_CHATS, axiosMiddleware);
  yield takeLatest(ActionTypes.CREATE_PATIENT_NUMBER_CHATS, axiosMiddleware);
  yield takeLatest(ActionTypes.READ_PATIENT_NUMBER_CHATS, axiosMiddleware);
  yield takeLatest(ActionTypes.ARCHIVE_PATIENT_NUMBER_CHATS, axiosMiddleware);
  yield takeLatest(ActionTypes.RESTORE_PATIENT_NUMBER_CHATS, axiosMiddleware);
  yield takeLatest(ActionTypes.DELETE_PATIENT_NUMBER_CHATS, axiosMiddleware);
  yield takeLatest(ActionTypes.CREATE_CONVERSATION_TAGS, axiosMiddleware);
  yield takeLatest(ActionTypes.DELETE_CONVERSATION_TAGS, axiosMiddleware);
  yield takeLatest(ActionTypes.LOAD_CONVERSATION_NUMBERS, axiosMiddleware);
  yield takeLatest(ActionTypes.UPDATE_CONVERSATION_PATIENT, axiosMiddleware);
}
