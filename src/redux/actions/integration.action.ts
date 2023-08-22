import { DentrixConnectData } from 'types';
import ActionTypes from '../actionTypes';

export function dentrixConnect(data: DentrixConnectData) {
  return {
    method: 'post',
    url: `/integrations/dentrix/connect`,
    type: ActionTypes.DENTRIX_CONNECT,
    data,
  };
}
export function dentrixDisconnect() {
  return {
    method: 'delete',
    url: `/integrations/dentrix/disconnect`,
    type: ActionTypes.DENTRIX_DISCONNECT,
  };
}

export function loadDentrixLocations() {
  return {
    method: 'get',
    url: `/integrations/dentrix/locations`,
    type: ActionTypes.LOAD_DENTRIX_LOCATIONS,
  };
}

export function twilioSubAccountConnect() {
  return {
    method: 'post',
    url: `/twilio/accounts`,
    type: ActionTypes.TWILIO_SUBACCOUNT_CONNECT,
  };
}

export function twilioDisconnect() {
  return {
    method: 'delete',
    url: `/twilio/accounts/disconnect`,
    type: ActionTypes.DELETE_TWILIO_DISCONNECT,
  };
}

export function loadStatus() {
  return {
    method: 'get',
    url: `/integrations/status`,
    type: ActionTypes.LOAD_INTEGRATIONS_STATUS,
  };
}
