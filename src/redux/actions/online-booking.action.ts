import { AddNewBookingModel, AppointmentTypeModel } from 'types';
import ActionTypes from '../actionTypes';

type AppointmentTypesParams = {
  page?: number;
  page_size?: number;
  location_id: number;
};
export function loadAllAppointmentTypes(params: AppointmentTypesParams) {
  return {
    method: 'get',
    url: '/onlinebooking/appointment-types',
    type: ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPES,
    params,
  };
}

type AppointmentsParams = {
  page: number;
  page_size: number;
  location_id: number;
  search?: string;
  start_time__date?: string;
};

export function getAllAppointments(params: AppointmentsParams) {
  return {
    method: 'get',
    url: '/onlinebooking/appointments',
    type: ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENTS,
    params,
  };
}

export function exportAppointments(params: { location_id: number }) {
  return {
    method: 'get',
    type: ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENTS_EXPORT,
    url: '/onlinebooking/appointments/export',
    params,
    responseType: 'blob',
  };
}

export function getOnlineBookingProviderSpecilalists() {
  return {
    method: 'get',
    url: '/onlinebooking/providers/specialties',
    type: ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_SPECIALISTS,
  };
}

export function loadAvailableProviders(params: {
  appointment_id: number;
  location_id: number;
}) {
  return {
    method: 'get',
    url: '/onlinebooking/appointments/available_provider',
    type: ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_PROVIDERS,
    params,
  };
}

export function loadAvailableOperatories(params: {
  appointment_id: number;
  location_id: number;
}) {
  return {
    method: 'get',
    url: '/onlinebooking/appointments/available_operatory',
    type: ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_OPERATORIES,
    params,
  };
}
export function updateAppointment(
  data: any,
  params: {
    id: number;
    location_id: number;
  }
) {
  return {
    method: 'patch',
    url: `/onlinebooking/appointments/${params.id}`,
    type: ActionTypes.UPDATE_ONLINE_BOOKING_APPOINTMENT,
    params,
    data,
  };
}

export function loadAllAppointmentTypeDurations() {
  return {
    method: 'get',
    url: '/onlinebooking/appointment-types/durations',
    type: ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPE_DURATIONS,
  };
}
export function updateAppointmentTypes(id: number, data: AppointmentTypeModel) {
  return {
    method: 'patch',
    url: `/onlinebooking/appointment-types/${id}`,
    type: ActionTypes.UPDATE_ONLINE_BOOKING_APPOINTMENT_TYPES,
    data,
  };
}

export function deleteAppointmentTypes(id: number) {
  return {
    method: 'delete',
    url: `/onlinebooking/appointment-types/${id}`,
    type: ActionTypes.DELETE_ONLINE_BOOKING_APPOINTMENT_TYPES,
  };
}

export function createAppointmentTypes(data: AppointmentTypeModel) {
  return {
    method: 'post',
    url: '/onlinebooking/appointment-types',
    type: ActionTypes.CREATE_ONLINE_BOOKING_APPOINTMENT_TYPES,
    data,
  };
}

type CalendarParams = {
  location_id: number;
  start_time__date__gte: string;
  start_time__date__lte: string;
};
export function loadAllCalendar(params: CalendarParams) {
  return {
    method: 'get',
    url: '/onlinebooking/appointments/calender',
    type: ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENTS_CALENDAR,
    params,
  };
}
export function loadAddNewBookingInsurances(params: { location_id: number }) {
  return {
    method: 'get',
    url: '/onlinebooking/admin-booking/insurances',
    type: ActionTypes.LOAD_ONLINE_BOOKING_ADMIN_INSURANCES,
    params,
  };
}
type OnlineBookingProviderParams = {
  page?: number;
  page_size?: number;
  location_id?: number;
};
export function loadAllProviders(params: OnlineBookingProviderParams) {
  return {
    method: 'get',
    url: '/onlinebooking/providers',
    type: ActionTypes.LOAD_ALL_ONLINE_BOOKING_PROVIDERS,
    params,
  };
}

export function loadAddNewBookingLocation(params: { location_id: number }) {
  return {
    method: 'get',
    url: '/onlinebooking/admin-booking/location',
    type: ActionTypes.LOAD_ONLINE_BOOKING_LOCATION,
    params,
  };
}

type OnlineBookingProviderPatchData = {
  first_name?: string;
  last_name?: string;
  specialty?: string;
  photo?: string;
  active?: boolean;
};
export function updateProvider(
  id: number,
  params: { location_id: number },
  data: OnlineBookingProviderPatchData
) {
  return {
    method: 'patch',
    url: `/onlinebooking/providers/${id}`,
    type: ActionTypes.UPDATE_ONLINE_BOOKING_PROVIDERS,
    params,
    data,
  };
}

type CheckInsuranceParams = {
  insurance_id?: number;
  provider_id?: number;
};
export function checkInsurance(params: CheckInsuranceParams) {
  return {
    method: 'get',
    url: '/onlinebooking/appointments/check_insurance',
    type: ActionTypes.LOAD_ONLINE_BOOKING_CHECK_INSURANCE,
    params,
  };
}

export function createAdminBooking(data: AddNewBookingModel) {
  return {
    method: 'post',
    url: '/onlinebooking/admin-booking',
    type: ActionTypes.CREATE_ONLINE_BOOKING_ADMIN_BOOKING,
    data,
  };
}
type WorkingHourData = {
  week_days?: number[];
  start_time: string;
  end_time: string;
  date?: string;
  unit?: string;
  number?: string;
  provider?: number;
  location?: number;
};
export function createWorkingHour(data: WorkingHourData) {
  return {
    method: 'post',
    url: 'onlinebooking/workinghours',
    type: ActionTypes.CREATE_ONLINE_BOOKING_WORKING_HOUR,
    data,
  };
}
export function updateWorkingHour(data: WorkingHourData, id: number) {
  return {
    method: 'patch',
    url: `onlinebooking/workinghours/${id}`,
    type: ActionTypes.UPDATE_ONLINE_BOOKING_WORKING_HOUR,
    data,
  };
}
export function deleteWorkingHour(id: number) {
  return {
    method: 'delete',
    url: `/onlinebooking/workinghours/${id}`,
    type: ActionTypes.DELETE_ONLINE_BOOKING_WORKING_HOUR,
  };
}

export function deleteBlockHour(id: number) {
  return {
    method: 'delete',
    url: `/onlinebooking/blockhours/${id}`,
    type: ActionTypes.DELETE_ONLINE_BOOKING_BLOCK_HOUR,
  };
}
type BlockHourData = {
  start_time?: string;
  end_time?: string;
  date?: string;
  provider?: number;
  location?: number;
};
export function createBlockHour(data: BlockHourData) {
  return {
    method: 'post',
    url: 'onlinebooking/blockhours',
    type: ActionTypes.CREATE_ONLINE_BOOKING_BLOCK_HOUR,
    data,
  };
}
export function updateBlockHour(id: number, data: BlockHourData) {
  return {
    method: 'put',
    url: `onlinebooking/blockhours/${id}`,
    type: ActionTypes.UPDATE_ONLINE_BOOKING_BLOCK_HOUR,
    data,
  };
}
export function loadAllInsurances(params?: {
  page: number;
  page_size: number;
}) {
  return {
    method: 'get',
    url: '/onlinebooking/insurances',
    type: ActionTypes.LOAD_ALL_ONLINE_BOOKING_INSURANCES,
    params,
  };
}

export function addNewInsurance(data: { name: string }) {
  return {
    method: 'post',
    url: '/onlinebooking/insurances',
    type: ActionTypes.CREATE_ONLINE_BOOKING_INSURANCES,
    data,
  };
}

export function updateInsurance(id: number, data: { name: string }) {
  return {
    method: 'patch',
    url: `/onlinebooking/insurances/${id}`,
    type: ActionTypes.UPDATE_ONLINE_BOOKING_INSURANCES,
    data,
  };
}
export function deleteInsurance(id: number) {
  return {
    method: 'delete',
    url: `/onlinebooking/insurances/${id}`,
    type: ActionTypes.DELETE_ONLINE_BOOKING_INSURANCES,
  };
}
export function loadProvider(params: { id: number; location_id: number }) {
  return {
    method: 'get',
    url: `/onlinebooking/providers/${params.id}`,
    type: ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_INFO,
    params,
  };
}

export function assignProviderInsurance(id: number, insurance_id: number) {
  return {
    method: 'post',
    url: `/onlinebooking/providers/${id}/insurance/${insurance_id}`,
    type: ActionTypes.ONLINE_BOOKING_ASSIGN_PROVIDER_INSURANCE,
    data: {},
  };
}
export function removeProviderInsurance(id: number, insurance_id: number) {
  return {
    method: 'delete',
    url: `/onlinebooking/providers/${id}/insurance/${insurance_id}`,
    type: ActionTypes.ONLINE_BOOKING_REMOVE_PROVIDER_INSURANCE,
  };
}
export function assignProviderAppointmentType(
  id: number,
  appointment_type_id: number,
  location_id?: number
) {
  return {
    method: 'post',
    url: `/onlinebooking/providers/${id}/appointment-type/${appointment_type_id}`,
    type: ActionTypes.ONLINE_BOOKING_ASSIGN_PROVIDER_APPOINTMENT_TYPE,
    data: { location_id: location_id },
  };
}
export function removeProviderAppointmentType(
  id: number,
  appointment_type_id: number
) {
  return {
    method: 'delete',
    url: `/onlinebooking/providers/${id}/appointment-type/${appointment_type_id}`,
    type: ActionTypes.ONLINE_BOOKING_REMOVE_PROVIDER_APPOINTMENT_TYPE,
  };
}
type AvailableTimeParams = {
  appointment_type_id: number;
  date: any;
  location_id: number;
};
export function appointmentAvailableTime(params: AvailableTimeParams) {
  return {
    method: 'get',
    url: `/onlinebooking/admin-booking/appointment_available_time`,
    type: ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_TIMES,
    params,
  };
}
export function loadStates() {
  return {
    method: 'get',
    url: `/onlinebooking/admin-booking/states`,
    type: ActionTypes.LOAD_ONLINE_BOOKING_STATES,
  };
}
