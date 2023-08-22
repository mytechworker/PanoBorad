import ActionTypes from '../actionTypes';

export function loadMap(params: any) {
  return {
    method: 'get',
    type: ActionTypes.LOAD_MAP,
    url: '/location-analytics/map',
    params,
  };
}
