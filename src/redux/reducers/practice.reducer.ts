import { PracticeState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: PracticeState = {
  Practice: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.LOAD_PRACTICE:
      return {
        ...state,
        Practice: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_PRACTICE_SUCCESS:
      return {
        ...state,
        Practice: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PRACTICE_FAILURE:
      return {
        ...state,
        Practice: {
          error: action.error,
          fetching: false,
        },
      };
    default:
      return state;
  }
}
