import ActionTypes from '../actionTypes';

type PhoneNumberParams = {
  page?: number;
  page_size?: number;
  location_id: number;
};
export function loadAllPhoneNumbers(params: PhoneNumberParams) {
  return {
    method: 'get',
    url: '/phone/numbers',
    type: ActionTypes.LOAD_ALL_PHONE_NUMBER,
    params,
  };
}
export function deletePhoneNumber(id: number) {
  return {
    method: 'delete',
    url: `/phone/numbers/${id}`,
    type: ActionTypes.DELETE_PHONE_NUMBER,
  };
}
type AvailableNumbersParams = {
  area_code?: number;
  country_code?: string;
};
export function loadAvailablePhoneNumbers(params: AvailableNumbersParams) {
  return {
    method: 'get',
    url: '/phone/numbers/availables',
    type: ActionTypes.LOAD_AVAILABLE_PHONE_NUMBER,
    params,
  };
}
export function createPhoneNumbers(data: {
  phone_number: string;
  location: number;
}) {
  return {
    method: 'post',
    url: '/phone/numbers',
    type: ActionTypes.CREATE_PHONE_NUMBER,
    data,
  };
}
export function updatePhoneNumbers(
  id: number,
  data: {
    name: string;
  }
) {
  return {
    method: 'patch',
    url: `/phone/numbers/${id}`,
    type: ActionTypes.UPDATE_PHONE_NUMBER,
    data,
  };
}
type SMSDate = {
  patient_number?: string;
  number?: string;
  body?: string;
};
export function createSMS(id: string, data: SMSDate) {
  return {
    method: 'post',
    url: `/phone/numbers/${id}/sms`,
    type: ActionTypes.CREATE_PHONE_NUMBER_SMS,
    data,
  };
}
