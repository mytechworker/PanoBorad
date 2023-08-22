import { PhoneNumberState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: PhoneNumberState = {
  allNumbers: {
    fetching: undefined,
    data: undefined,
  },
  availableNumbers: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_ALL_PHONE_NUMBERS
    case ActionTypes.LOAD_ALL_PHONE_NUMBER:
      return {
        ...state,
        allNumbers: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_PHONE_NUMBER_SUCCESS:
      return {
        ...state,
        allNumbers: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_PHONE_NUMBER_FAILURE:
      return {
        ...state,
        allNumbers: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_AVAILABLE_PHONE_NUMBERS
    case ActionTypes.LOAD_AVAILABLE_PHONE_NUMBER:
      return {
        ...state,
        availableNumbers: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_AVAILABLE_PHONE_NUMBER_SUCCESS:
      return {
        ...state,
        availableNumbers: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_AVAILABLE_PHONE_NUMBER_FAILURE:
      return {
        ...state,
        availableNumbers: {
          error: action.error,
          fetching: false,
        },
      };

    default:
      return state;
  }
}
