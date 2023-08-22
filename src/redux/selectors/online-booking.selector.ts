import { createSelector } from 'reselect';
import { AppoinmentState, OnlineBookingState } from 'types';

const selectOnlineBooking = (state: any) => state.onlineBooking;

export const selectAppoinment = createSelector(
  [selectOnlineBooking],
  (appointments: OnlineBookingState) => appointments?.appointments
);

export const loadNotificationFetching = createSelector(
  [selectAppoinment],
  (appointments: AppoinmentState) => appointments?.fetching
);

export const selectAppoinmentList = createSelector(
  [selectAppoinment],
  (appointments: AppoinmentState) => appointments?.data
);

export const selectAppointmentTypes = createSelector(
  [selectOnlineBooking],
  (appointments: OnlineBookingState) => appointments?.appointmentTypes
);

export const selectProviderSpecialists = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.providerSpecialists
);
export const selectAvailableProviders = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.availableProviders
);
export const selectAvailableOperatories = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.availableOperatories
);

export const selectAvailableTimes = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.availableTimes
);

export const selectDurations = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.durations
);

export const selectCalendar = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.calendar
);
export const selectInsurances = createSelector(
  [selectOnlineBooking],
  (onlinebooking: OnlineBookingState) => onlinebooking?.insurances
);

export const selectLocation = createSelector(
  [selectOnlineBooking],
  (onlinebooking: OnlineBookingState) => onlinebooking?.location
);
export const selectProvidersList = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.providers
);

export const selectAllInsurancesList = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.allInsurances
);
export const selectProvider = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.provider
);
export const selectStates = createSelector(
  [selectOnlineBooking],
  (onlineBooking: OnlineBookingState) => onlineBooking?.states
);
