// @flow

import { AppState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: AppState = {
  location: undefined,
  locations: [],
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case ActionTypes.SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };

    default:
      return state;
  }
}
