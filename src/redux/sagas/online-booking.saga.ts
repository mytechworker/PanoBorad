import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* onlineBookingSaga() {
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENTS,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENTS_EXPORT,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_SPECIALISTS,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_PROVIDERS,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_OPERATORIES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_TIMES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.UPDATE_ONLINE_BOOKING_APPOINTMENT_TYPES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.UPDATE_ONLINE_BOOKING_APPOINTMENT,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.DELETE_ONLINE_BOOKING_APPOINTMENT_TYPES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.CREATE_ONLINE_BOOKING_APPOINTMENT_TYPES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPE_DURATIONS,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENTS_CALENDAR,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_ADMIN_INSURANCES,
    axiosMiddleware
  );
  yield takeLatest(ActionTypes.LOAD_ONLINE_BOOKING_LOCATION, axiosMiddleware);
  yield takeLatest(
    ActionTypes.CREATE_ONLINE_BOOKING_ADMIN_BOOKING,
    axiosMiddleware
  );

  // ONLINE_BOOKING_PROVIDERS
  yield takeLatest(
    ActionTypes.LOAD_ALL_ONLINE_BOOKING_PROVIDERS,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.UPDATE_ONLINE_BOOKING_PROVIDERS,
    axiosMiddleware
  );

  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_CHECK_INSURANCE,
    axiosMiddleware
  );
  // ONLINE_BOOKING_WORKING_HOURS
  yield takeLatest(
    ActionTypes.CREATE_ONLINE_BOOKING_WORKING_HOUR,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.DELETE_ONLINE_BOOKING_WORKING_HOUR,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.UPDATE_ONLINE_BOOKING_WORKING_HOUR,
    axiosMiddleware
  );
  // ONLINE_BOOKING_BLOCK_HOURS
  yield takeLatest(
    ActionTypes.DELETE_ONLINE_BOOKING_BLOCK_HOUR,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.CREATE_ONLINE_BOOKING_BLOCK_HOUR,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.UPDATE_ONLINE_BOOKING_BLOCK_HOUR,
    axiosMiddleware
  );
  // ONLINE_BOOKING_INSURANCES
  yield takeLatest(
    ActionTypes.LOAD_ALL_ONLINE_BOOKING_INSURANCES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.CREATE_ONLINE_BOOKING_INSURANCES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.UPDATE_ONLINE_BOOKING_INSURANCES,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.DELETE_ONLINE_BOOKING_INSURANCES,
    axiosMiddleware
  );
  // ONLINE_BOOKING_PROVIDER
  yield takeLatest(
    ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_INFO,
    axiosMiddleware
  );
  // PROVIDER INSURANCE
  yield takeLatest(
    ActionTypes.ONLINE_BOOKING_ASSIGN_PROVIDER_INSURANCE,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.ONLINE_BOOKING_REMOVE_PROVIDER_INSURANCE,
    axiosMiddleware
  );

  // PROVIDER APOINTMENT TYPE
  yield takeLatest(
    ActionTypes.ONLINE_BOOKING_ASSIGN_PROVIDER_APPOINTMENT_TYPE,
    axiosMiddleware
  );
  yield takeLatest(
    ActionTypes.ONLINE_BOOKING_REMOVE_PROVIDER_APPOINTMENT_TYPE,
    axiosMiddleware
  );
  //states
  yield takeLatest(ActionTypes.LOAD_ONLINE_BOOKING_STATES, axiosMiddleware);
}
