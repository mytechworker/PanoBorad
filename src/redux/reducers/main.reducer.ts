import ActionTypes from '../actionTypes';

import { MainState } from 'types';

export const initialState: MainState = {
  sideMenu: false,
  patientCardStatus: false,
  patientCardType: '',
  patientId: null,
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDE_MENU:
      return {
        ...state,
        sideMenu: action.payload,
      };
    case ActionTypes.TOGGLE_PATIENT_CARD:
      return {
        ...state,
        patientCardStatus: action.payload,
      };
    case ActionTypes.SET_PATIENT_CARD_TYPE:
      return {
        ...state,
        patientCardType: action.payload,
      };
    case ActionTypes.SET_PATIENT_ID:
      return {
        ...state,
        patientId: action.payload,
      };
    default:
      return state;
  }
}
