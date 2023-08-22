// @flow

import { ProfileState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: ProfileState = {
  profile: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.LOAD_PROFILE:
      return {
        ...state,
        profile: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PROFILE__FAILURE:
      return {
        ...state,
        profile: {
          error: action.error,
          fetching: false,
        },
      };
    default:
      return state;
  }
}
