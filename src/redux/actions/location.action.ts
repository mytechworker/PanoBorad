import { LocationModel, PatchLocationModel } from 'types';
import ActionTypes from '../actionTypes';

export function loadAll(data?: any) {
  return {
    method: 'get',
    type: ActionTypes.LOAD_ALL_LOCATIONS,
    url: '/locations',
    data,
  };
}
export function load(id: number) {
  return {
    method: 'get',
    type: ActionTypes.LOAD_LOCATIONS,
    url: `/locations/${id}`,
  };
}

export function patchLocations(id: number, data: PatchLocationModel) {
  return {
    method: 'patch',
    type: ActionTypes.PATCH_LOCATIONS,
    url: `/locations/${id}`,
    data,
  };
}
export function loadStates() {
  return {
    method: 'get',
    type: ActionTypes.LOAD_ALL_STATES,
    url: `/locations/states`,
  };
}
