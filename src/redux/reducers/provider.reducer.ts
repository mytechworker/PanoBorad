import { ProviderState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: ProviderState = {
  list: {
    fetching: undefined,
    data: undefined,
  },
  production: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.LOAD_PROVIDER_LIST:
      return {
        ...state,
        list: {
          fetching: true,
        },
      };

    case ActionTypes.LOAD_PROVIDER_LIST_SUCCESS:
      return {
        ...state,
        list: {
          data: action.data,
          fetching: false,
        },
      };

    case ActionTypes.LOAD_PROVIDER_LIST_FAILURE:
      return {
        ...state,
        list: {
          error: action.error,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PROVIDER_PRODUCTION:
      return {
        ...state,
        production: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_PROVIDER_PRODUCTION_SUCCESS:
      return {
        ...state,
        production: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PROVIDER_PRODUCTION_FAILURE:
      return {
        ...state,
        production: {
          error: action.error,
          fetching: false,
        },
      };
    default:
      return state;
  }
}
