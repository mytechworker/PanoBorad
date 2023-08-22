import { LocationModel } from 'types';
import ActionTypes from '../actionTypes';

export function handleSetLocation(payload: LocationModel) {
  return {
    type: ActionTypes.SET_LOCATION,
    payload,
  };
}

export function handleSetLocations(payload: string[]) {
  return {
    type: ActionTypes.SET_LOCATIONS,
    payload,
  };
}
