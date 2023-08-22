import { single, promise } from './lib';

export default [
  // Single Actions
  single('single_action'),
  single('auth_sign_out'),
  single('toggle_theme'),
  single('toggle_language'),

  single('SET_LOCATION'),
  single('SET_LOCATIONS'),
  single('TOGGLE_SIDE_MENU'),
  single('TOGGLE_PATIENT_CARD'),
  single('SET_PATIENT_CARD_TYPE'),
  single('SET_PATIENT_ID'),

  /**
   * Promise Actions -> Second arguments guide
   * c: CREATE
   * l: LOAD
   * a: LOAD_ALL
   * u: UPDATE
   * d: DELETE
   */

  promise('MEDIA_UPLOAD'),
  promise('DENTRIX_CONNECT'),
  promise('DENTRIX_DISCONNECT'),
  promise('DENTRIX_LOCATIONS', 'l'),
  promise('INTEGRATIONS_STATUS', 'l'),
  promise('TWILIO_SUBACCOUNT_CONNECT'),
  promise('TWILIO_DISCONNECT', 'd'),

  promise('profile', 'lu'),
  //PROFILE
  promise('PROFILE', 'lu'),
  promise('PASSWORD', 'u'),

  promise('LOCATIONS', 'al'),
  promise('PATCH_LOCATIONS'),

  // AUTH
  promise('AUTH_LOGIN_EMAIL'),
  promise('REGISTER_EMAIL'),
  promise('LOGIN_EMAIL'),
  promise('AUTH_FORGET_PASSWORD'),
  promise('AUTH_SET_NEW_PASSWORD'),
  promise('EMAIL_SMS_2FA_CODE'),
  promise('REGISTER_MOBILE'),
  promise('LOGIN_MOBILE'),

  // TEAM MANAGEMANT
  promise('USERS', 'ac'),
  promise('USER', 'lu'),
  promise('PERMISSIONS', 'a'),
  promise('USER_ROLES', 'l'),

  //Report
  promise('LOCATION_ANALYTICS_OFFICE', 'l'),

  // PRACTICE
  promise('PRACTICE', 'lu'),

  // REPORT
  promise('REPORT_RECARE', 'l'),
  promise('REPORT_CANCELLATIONS', 'l'),
  promise('REPORT_HYGIENE', 'l'),
  promise('REPORT_HYGIENE_REAPPOINTMENT', 'l'),
  promise('REPORT_NEW_PATIENTS', 'l'),
  promise('REPORT_PRODUCTION', 'l'),
  promise('REPORT_RESTORATIVE', 'l'),
  promise('REPORT_VISIT', 'l'),
  promise('REPORT_SET_HYGIENE_GOAL'),
  promise('REPORT_SET_HYGEINE_REAPPOINMENT_GOAL'),
  promise('REPORT_SET_NEW_PATIONTS_GOAL'),
  promise('REPORT_SET_PRODUCTION_GOAL'),
  promise('REPORT_SET_RESTORATIVE_GOAL'),
  promise('REPORT_SET_VISIT_GOAL'),

  // PROVIDER
  promise('PROVIDER_LIST', 'l'),
  promise('PROVIDER_PRODUCTION', 'l'),
  promise('PROVIDER_LIST_EXPORT', 'l'),

  //ANALYTICS
  promise('MAP', 'l'),

  // STATES
  promise('STATES', 'a'),

  // ONLINE BOOKING
  promise('ONLINE_BOOKING_APPOINTMENTS', 'l'),
  promise('ONLINE_BOOKING_PROVIDER_SPECIALISTS', 'l'),
  promise('ONLINE_BOOKING_APPOINTMENTS_EXPORT', 'l'),
  promise('ONLINE_BOOKING_APPOINTMENT_AVAILABLE_PROVIDERS', 'l'),
  promise('ONLINE_BOOKING_APPOINTMENT_AVAILABLE_OPERATORIES', 'l'),
  promise('ONLINE_BOOKING_APPOINTMENT_AVAILABLE_TIMES', 'l'),
  promise('ONLINE_BOOKING_APPOINTMENT', 'u'),
  promise('ONLINE_BOOKING_APPOINTMENT_TYPES', 'acud'),
  promise('ONLINE_BOOKING_APPOINTMENT_TYPE_DURATIONS', 'a'),
  promise('ONLINE_BOOKING_APPOINTMENTS_CALENDAR', 'a'),
  promise('ONLINE_BOOKING_ADMIN_INSURANCES', 'l'),
  promise('ONLINE_BOOKING_LOCATION', 'l'),
  promise('ONLINE_BOOKING_ADMIN_BOOKING', 'c'),
  promise('ONLINE_BOOKING_PROVIDERS', 'au'),
  promise('ONLINE_BOOKING_CHECK_INSURANCE', 'l'),
  promise('ONLINE_BOOKING_WORKING_HOUR', 'acud'),
  promise('ONLINE_BOOKING_BLOCK_HOUR', 'acud'),
  promise('ONLINE_BOOKING_INSURANCES', 'acud'),
  promise('ONLINE_BOOKING_PROVIDER_INFO', 'l'),
  promise('ONLINE_BOOKING_ASSIGN_PROVIDER_INSURANCE'),
  promise('ONLINE_BOOKING_REMOVE_PROVIDER_INSURANCE'),
  promise('ONLINE_BOOKING_ASSIGN_PROVIDER_APPOINTMENT_TYPE'),
  promise('ONLINE_BOOKING_REMOVE_PROVIDER_APPOINTMENT_TYPE'),
  promise('ONLINE_BOOKING_LOCATION', 'l'),
  promise('ONLINE_BOOKING_STATES', 'l'),

  // MANAGEMENT_SETTING
  promise('MANAGEMENT_SETTING', 'au'),

  //phone number
  promise('PHONE_NUMBER', 'acud'),
  promise('AVAILABLE_PHONE_NUMBER', 'l'),
  promise('CREATE_PHONE_NUMBER_SMS'),

  //conversation
  promise('CONVERSATION_PATIENT_NUMBER', 'acud'),
  promise('PATIENT_NUMBER_CHATS', 'lacud'),
  promise('READ_PATIENT_NUMBER_CHATS'),
  promise('ARCHIVE_PATIENT_NUMBER_CHATS'),
  promise('RESTORE_PATIENT_NUMBER_CHATS'),
  promise('CONVERSATION_PATIENT_NUMBER', 'l'),
  promise('CONVERSATION_TAGS', 'lacud'),
  promise('CONVERSATION_NUMBERS', 'l'),
  promise('UPDATE_CONVERSATION_PATIENT'),

  //pipeline
  promise('PIPELINE_PATIENT_NUMBER', 'l'),
  promise('PIPELINE_OPPORTUNITY', 'l'),
  promise('EXPORT_PIPELINE_OPPORTUNITY'),
  promise('UPDATE_PIPELINE_OPPORTUNITY_STATUS'),
  promise('PIPELINE_TAGS', 'lacud'),
  promise('ADD_PIPELINE_TAG'),
  promise('CREATE_PIPELINE_NOTE'),
  promise('DELETE_PIPELINE_NOTE'),
  promise('UPDATE_PIPELINE_PATIENT'),

  //tag
  promise('TAG', 'lacud'),
];
