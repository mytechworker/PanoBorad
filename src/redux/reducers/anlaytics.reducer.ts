// @flow
import ActionTypes from '../actionTypes';
import { AnalitycsState } from 'types';

const initialState: AnalitycsState = {
  mapList: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.LOAD_MAP:
      return {
        ...state,
        mapList: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_MAP_SUCCESS:
      return {
        ...state,
        mapList: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_MAP_FAILURE:
      return {
        ...state,
        mapList: {
          error: action.error,
          fetching: false,
        },
      };
    default:
      return state;
  }
}
