import { OnlineBookingState } from 'types';
import ActionTypes from '../actionTypes';

const initialState: OnlineBookingState = {
  appointments: {
    fetching: undefined,
    data: undefined,
  },
  appointmentTypes: {
    fetching: undefined,
    data: undefined,
  },
  providerSpecialists: {
    fetching: undefined,
    data: undefined,
  },
  availableProviders: {
    fetching: undefined,
    data: undefined,
  },
  availableOperatories: { fetching: undefined, data: undefined },
  availableTimes: { fetching: undefined, data: undefined },
  durations: {
    fetching: undefined,
    data: undefined,
  },
  calendar: {
    fetching: undefined,
    data: undefined,
  },
  location: {
    fetching: undefined,
    data: undefined,
  },
  insurances: {
    fetching: undefined,
    data: undefined,
  },
  providers: {
    fetching: undefined,
    data: undefined,
  },
  allInsurances: {
    data: undefined,
    fetching: undefined,
  },
  provider: {
    data: undefined,
    fetching: undefined,
  },
  states: {
    data: undefined,
    fetching: undefined,
  },
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_ALL_ONLINE_BOOKING_APPOINTMENTS
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENTS:
      return {
        ...state,
        appointments: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        appointments: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENTS_FAILURE:
      return {
        ...state,
        appointments: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_PROVIDER_SPECIALISTS
    case ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_SPECIALISTS:
      return {
        ...state,
        providerSpecialists: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_SPECIALISTS_SUCCESS:
      return {
        ...state,
        providerSpecialists: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_SPECIALISTS_FAILURE:
      return {
        ...state,
        providerSpecialists: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPES
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPES:
      return {
        ...state,
        appointmentTypes: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPES_SUCCESS:
      return {
        ...state,
        appointmentTypes: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPES_FAILURE:
      return {
        ...state,
        appointmentTypes: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_PROVIDERS
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_PROVIDERS:
      return {
        ...state,
        availableProviders: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_PROVIDERS_SUCCESS:
      return {
        ...state,
        availableProviders: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_PROVIDERS_FAILURE:
      return {
        ...state,
        availableProviders: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_OPERATORIES
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_OPERATORIES:
      return {
        ...state,
        availableOperatories: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_OPERATORIES_SUCCESS:
      return {
        ...state,
        availableOperatories: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_OPERATORIES_FAILURE:
      return {
        ...state,
        availableOperatories: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_TIME
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_TIMES:
      return {
        ...state,
        availableTimes: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_TIMES_SUCCESS:
      return {
        ...state,
        availableTimes: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_APPOINTMENT_AVAILABLE_TIMES_FAILURE:
      return {
        ...state,
        availableTimes: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPE_DURATIONS
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPE_DURATIONS:
      return {
        ...state,
        durations: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPE_DURATIONS_SUCCESS:
      return {
        ...state,
        durations: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENT_TYPE_DURATIONS_FAILURE:
      return {
        ...state,
        durations: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_APPOINTMENTS_CALENDAR
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENTS_CALENDAR:
      return {
        ...state,
        calendar: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENTS_CALENDAR_SUCCESS:
      return {
        ...state,
        calendar: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_APPOINTMENTS_CALENDAR_FAILURE:
      return {
        ...state,
        calendar: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ONLINE_BOOKING_ADD_NEW_BOOKING_INSURANCES
    case ActionTypes.LOAD_ONLINE_BOOKING_ADMIN_INSURANCES:
      return {
        ...state,
        insurances: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_ADMIN_INSURANCES_SUCCESS:
      return {
        ...state,
        insurances: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_ADMIN_INSURANCES_FAILURE:
      return {
        ...state,
        insurances: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_PROVIDERS
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_PROVIDERS:
      return {
        ...state,
        providers: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_PROVIDERS_FAILURE:
      return {
        ...state,
        providers: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ONLINE_BOOKING_ADD_NEW_BOOKING_INSURANCES
    case ActionTypes.LOAD_ONLINE_BOOKING_LOCATION:
      return {
        ...state,
        location: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_LOCATION_SUCCESS:
      return {
        ...state,
        location: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_LOCATION_FAILURE:
      return {
        ...state,
        location: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_INSURANCES
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_INSURANCES:
      return {
        ...state,
        allInsurances: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_INSURANCES_SUCCESS:
      return {
        ...state,
        allInsurances: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_ONLINE_BOOKING_INSURANCES_FAILURE:
      return {
        ...state,
        allInsurances: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_PROVIDER
    case ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_INFO:
      return {
        ...state,
        provider: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_INFO_SUCCESS:
      return {
        ...state,
        provider: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_PROVIDER_INFO_FAILURE:
      return {
        ...state,
        provider: {
          error: action.error,
          fetching: false,
        },
      };

    // LOAD_ALL_ONLINE_BOOKING_STATES
    case ActionTypes.LOAD_ONLINE_BOOKING_STATES:
      return {
        ...state,
        states: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_STATES_SUCCESS:
      return {
        ...state,
        states: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ONLINE_BOOKING_STATES_FAILURE:
      return {
        ...state,
        states: {
          error: action.error,
          fetching: false,
        },
      };

    default:
      return state;
  }
}
