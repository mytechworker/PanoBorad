// @flow

import { ManagementState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: ManagementState = {
  users: {
    fetching: undefined,
    data: undefined,
  },
  user: {
    fetching: undefined,
    data: undefined,
  },
  permissions: {
    fetching: undefined,
    data: undefined,
  },
  roles: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.LOAD_ALL_USERS:
      return {
        ...state,
        users: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_USERS_FAILURE:
      return {
        ...state,
        users: {
          error: action.error,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_USER:
      return {
        ...state,
        user: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        user: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_USER_FAILURE:
      return {
        ...state,
        user: {
          error: action.error,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_PERMISSIONS:
      return {
        ...state,
        permissions: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_PERMISSIONS_SUCCESS:
      return {
        ...state,
        permissions: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_PERMISSIONS_FAILURE:
      return {
        ...state,
        permissions: {
          error: action.error,
          fetching: false,
        },
      };

    case ActionTypes.LOAD_USER_ROLES:
      return {
        ...state,
        roles: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_USER_ROLES_SUCCESS:
      return {
        ...state,
        roles: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_USER_ROLES_FAILURE:
      return {
        ...state,
        roles: {
          error: action.error,
          fetching: false,
        },
      };
    default:
      return state;
  }
}
