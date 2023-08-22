// @flow

import { IntegrationState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: IntegrationState = {
  locations: {
    fetching: undefined,
    data: undefined,
    error: undefined,
  },
  status: {
    fetching: undefined,
    data: undefined,
    error: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_DENTRIX_LOCATIONS
    case ActionTypes.LOAD_DENTRIX_LOCATIONS:
      return {
        ...state,
        locations: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_DENTRIX_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_DENTRIX_LOCATIONS_FAILURE:
      return {
        ...state,
        locations: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_INTEGRATIONS_STATUS
    case ActionTypes.LOAD_INTEGRATIONS_STATUS:
      return {
        ...state,
        status: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_INTEGRATIONS_STATUS_SUCCESS:
      return {
        ...state,
        status: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_INTEGRATIONS_STATUS_FAILURE:
      return {
        ...state,
        status: {
          error: action.error,
          fetching: false,
        },
      };

    default:
      return state;
  }
}
