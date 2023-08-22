import ActionTypes from '../actionTypes';

export function updatePractice(data: any, locationId: number) {
  return {
    data,
    method: 'patch',
    type: ActionTypes.UPDATE_PRACTICE,
    url: `/locations/${locationId}`,
  };
}
export function getPracticeInfo(locationId: number) {
  return {
    method: 'get',
    url: `/locations/${locationId}`,
    type: ActionTypes.LOAD_PRACTICE,
  };
}
