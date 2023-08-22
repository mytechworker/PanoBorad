import { ReportState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: ReportState = {
  office: { fetching: undefined, data: undefined },
  recare: {
    fetching: undefined,
    data: undefined,
  },
  cancellation: {
    fetching: undefined,
    data: undefined,
  },
  hygiene: {
    fetching: undefined,
    data: undefined,
  },
  reappointment: {
    fetching: undefined,
    data: undefined,
  },
  patients: {
    fetching: undefined,
    data: undefined,
  },
  production: {
    fetching: undefined,
    data: undefined,
  },
  restorative: {
    fetching: undefined,
    data: undefined,
  },
  visit: {
    fetching: undefined,
    data: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_REPORT_RECARE
    case ActionTypes.LOAD_REPORT_RECARE:
      return {
        ...state,
        recare: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_RECARE_SUCCESS:
      return {
        ...state,
        recare: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_REPORT_RECARE_FAILURE:
      return {
        ...state,
        recare: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_REPORT_CANCELLATIONS
    case ActionTypes.LOAD_REPORT_CANCELLATIONS:
      return {
        ...state,
        cancellation: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_CANCELLATIONS_SUCCESS:
      return {
        ...state,
        cancellation: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_REPORT_CANCELLATIONS_FAILURE:
      return {
        ...state,
        cancellation: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_REPORT_HYGIENE
    case ActionTypes.LOAD_REPORT_HYGIENE:
      return {
        ...state,
        hygiene: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_HYGIENE_SUCCESS:
      return {
        ...state,
        hygiene: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_REPORT_HYGIENE_FAILURE:
      return {
        ...state,
        hygiene: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_REPORT_HYGIENE_REAPPOINTMENT
    case ActionTypes.LOAD_REPORT_HYGIENE_REAPPOINTMENT:
      return {
        ...state,
        reappointment: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_HYGIENE_REAPPOINTMENT_SUCCESS:
      return {
        ...state,
        reappointment: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_REPORT_HYGIENE_REAPPOINTMENT_FAILURE:
      return {
        ...state,
        reappointment: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_REPORT_NEW_PATIENTS
    case ActionTypes.LOAD_REPORT_NEW_PATIENTS:
      return {
        ...state,
        patients: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_NEW_PATIENTS_SUCCESS:
      return {
        ...state,
        patients: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_REPORT_NEW_PATIENTS_FAILURE:
      return {
        ...state,
        patients: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_REPORT_PRODUCTION
    case ActionTypes.LOAD_REPORT_PRODUCTION:
      return {
        ...state,
        production: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_PRODUCTION_SUCCESS:
      return {
        ...state,
        production: {
          data: action.data,
          fetching: false,
        },
      };

    case ActionTypes.LOAD_REPORT_PRODUCTION_FAILURE:
      return {
        ...state,
        production: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_REPORT_RESTORATIVE
    case ActionTypes.LOAD_REPORT_RESTORATIVE:
      return {
        ...state,
        restorative: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_RESTORATIVE_SUCCESS:
      return {
        ...state,
        restorative: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_REPORT_RESTORATIVE_FAILURE:
      return {
        ...state,
        restorative: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_REPORT_VISIT
    case ActionTypes.LOAD_REPORT_VISIT:
      return {
        ...state,
        visit: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_REPORT_VISIT_SUCCESS:
      return {
        ...state,
        visit: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_REPORT_VISIT_FAILURE:
      return {
        ...state,
        visit: {
          error: action.error,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_LOCATION_ANALYTICS_OFFICE:
      return {
        ...state,
        office: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_LOCATION_ANALYTICS_OFFICE_SUCCESS:
      return {
        ...state,
        office: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_LOCATION_ANALYTICS_OFFICE_FAILURE:
      return {
        ...state,
        office: {
          error: action.error,
          fetching: false,
        },
      };

    default:
      return state;
  }
}
