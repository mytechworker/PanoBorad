import {
  AppointmentModel,
  AppointmentTypesDataModel,
  AvailableProviderModel,
  AvailableOperatoryModel,
  AppointmentsCalendarModel,
  AddNewBookingLocationModel,
  ProviderModel,
  ProviderSpecialityModel,
  InsuranceModel,
} from './online-booking';

export interface OnlineBookingState {
  appointments: AppoinmentState;
  appointmentTypes: AppointmentTypesState;
  providerSpecialists: ProviderSpecialistsState;
  availableProviders: AvailableProvidersState;
  availableOperatories: AvailableOperatoriesState;
  availableTimes: AvailableTimesState;
  durations: DurationsState;
  calendar: CalendarState;
  location: OnlineBookingLocationState;
  insurances: OnlineBookingInsurancesState;
  providers: ProvidersState;
  allInsurances: AllInsurancesState;
  provider: ProviderInfoState;
  states: StatesState;
}

export interface AppoinmentState {
  data?: AppointmentModel;
  fetching?: boolean;
}

export interface AppointmentTypesState {
  data?: AppointmentTypesDataModel;
  fetching?: boolean;
}

export interface ProviderSpecialistsState {
  data?: ProviderSpecialityModel[];
  fetching?: boolean;
}

export interface AvailableProvidersState {
  data?: AvailableProviderModel;
  fetching?: boolean;
}

export interface AvailableOperatoriesState {
  data?: AvailableOperatoryModel;
  fetching?: boolean;
}

export interface AvailableTimesState {
  data?: string[];
  fetching?: boolean;
}

export interface DurationsState {
  data?: number[];
  fetching?: boolean;
}
export interface CalendarState {
  data?: AppointmentsCalendarModel[];
  fetching?: boolean;
}

export interface OnlineBookingInsurancesState {
  data?: InsuranceModel[];
  fetching?: boolean;
}

export interface OnlineBookingLocationState {
  data?: AddNewBookingLocationModel;
  fetching?: boolean;
}

export interface ProvidersState {
  data?: ProviderModel;
  fetching?: boolean;
}
export interface AllInsurancesState {
  data?: InsuranceModel[];
  fetching?: boolean;
}
export interface ProviderInfoState {
  data?: ProviderModel;
  fetching?: boolean;
}
export interface StatesState {
  data?: [];
  fetching?: boolean;
}
