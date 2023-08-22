import { PipelineState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: PipelineState = {
  patient: {
    fetching: undefined,
    data: undefined,
  },
  opportunities: {
    fetching: undefined,
    data: undefined,
  },
  tags: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_PATIENT
    case ActionTypes.LOAD_PIPELINE_PATIENT_NUMBER:
      return {
        ...state,
        patient: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_PIPELINE_PATIENT_NUMBER_SUCCESS:
      return {
        ...state,
        patient: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PIPELINE_PATIENT_NUMBER_FAILURE:
      return {
        ...state,
        patient: {
          error: action.error,
          fetching: false,
        },
      };
    // LOAD_OPPORTUNITY
    case ActionTypes.LOAD_PIPELINE_OPPORTUNITY:
      return {
        ...state,
        opportunities: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_PIPELINE_OPPORTUNITY_SUCCESS:
      return {
        ...state,
        opportunities: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PIPELINE_OPPORTUNITY_FAILURE:
      return {
        ...state,
        opportunities: {
          error: action.error,
          fetching: false,
        },
      };
    // LOAD_TAGS
    case ActionTypes.LOAD_PIPELINE_TAGS:
      return {
        ...state,
        tags: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_PIPELINE_TAGS_SUCCESS:
      return {
        ...state,
        tags: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_PIPELINE_TAGS_FAILURE:
      return {
        ...state,
        tags: {
          error: action.error,
          fetching: false,
        },
      };
    default:
      return state;
  }
}
