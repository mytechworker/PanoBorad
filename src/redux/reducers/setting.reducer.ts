import { SettingState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: SettingState = {
  data: undefined,
  fetching: undefined,
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_ALL_MANAGEMENT_SETTING
    case ActionTypes.LOAD_ALL_MANAGEMENT_SETTING:
      return {
        ...state,
        fetching: true,
      };
    case ActionTypes.LOAD_ALL_MANAGEMENT_SETTING_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
      };
    case ActionTypes.LOAD_ALL_MANAGEMENT_SETTING_FAILURE:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };

    default:
      return state;
  }
}
