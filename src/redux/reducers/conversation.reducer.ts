import { ConversationState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: ConversationState = {
  allPatientNumbers: {
    fetching: undefined,
    data: undefined,
  },
  chats: {
    fetching: undefined,
    data: undefined,
  },
  patient: {
    fetching: undefined,
    data: undefined,
  },
  numbers: {
    fetching: undefined,
    data: [],
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_ALL_PATIENT_NUMBERS
    case ActionTypes.LOAD_ALL_CONVERSATION_PATIENT_NUMBER:
      return {
        ...state,
        allPatientNumbers: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_CONVERSATION_PATIENT_NUMBER_SUCCESS:
      return {
        ...state,
        allPatientNumbers: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_CONVERSATION_PATIENT_NUMBER_FAILURE:
      return {
        ...state,
        allPatientNumbers: {
          error: action.error,
          fetching: false,
        },
      };
    // LOAD_CHATS
    case ActionTypes.LOAD_PATIENT_NUMBER_CHATS:
      return {
        ...state,
        chats: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_PATIENT_NUMBER_CHATS_SUCCESS:
      return {
        ...state,
        chats: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PATIENT_NUMBER_CHATS_FAILURE:
      return {
        ...state,
        chats: {
          error: action.error,
          fetching: false,
        },
      };
    // LOAD_PATIENT
    case ActionTypes.LOAD_CONVERSATION_PATIENT_NUMBER:
      return {
        ...state,
        patient: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_CONVERSATION_PATIENT_NUMBER_SUCCESS:
      return {
        ...state,
        patient: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_CONVERSATION_PATIENT_NUMBER_FAILURE:
      return {
        ...state,
        patient: {
          error: action.error,
          fetching: false,
        },
      };
    // LOAD_NUMBERS
    case ActionTypes.LOAD_CONVERSATION_NUMBERS:
      return {
        ...state,
        numbers: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_CONVERSATION_NUMBERS_SUCCESS:
      return {
        ...state,
        numbers: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_CONVERSATION_NUMBERS_FAILURE:
      return {
        ...state,
        numbers: {
          error: action.error,
          fetching: false,
        },
      };

    default:
      return state;
  }
}
