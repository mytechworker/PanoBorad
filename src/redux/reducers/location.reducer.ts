// @flow

import { LocationState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: LocationState = {
  all: {
    fetching: undefined,
    data: undefined,
  },
  states: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_ALL_LOCATIONS
    case ActionTypes.LOAD_ALL_LOCATIONS:
      return {
        ...state,
        all: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        all: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_LOCATIONS_FAILURE:
      return {
        ...state,
        all: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_STATES
    case ActionTypes.LOAD_ALL_STATES:
      return {
        ...state,
        states: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_STATES_SUCCESS:
      return {
        ...state,
        states: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_STATES_FAILURE:
      return {
        ...state,
        states: {
          error: action.error,
          fetching: false,
        },
      };

    default:
      return state;
  }
}
