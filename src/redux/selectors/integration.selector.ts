import { createSelector } from 'reselect';
import { Dentrixlocations, IntegrationState, IntegrationStatus } from 'types';

const selectIntegration = (state: any) => state.integration;

export const selectLocations = createSelector(
  [selectIntegration],
  (integration: IntegrationState) => integration?.locations
);

export const selectLocationsFetching = createSelector(
  [selectLocations],
  (locations: Dentrixlocations) => locations?.fetching
);

export const selectLocationsData = createSelector(
  [selectLocations],
  (locations: Dentrixlocations) => locations?.data
);

export const selectStatus = createSelector(
  [selectIntegration],
  (integration: IntegrationState) => integration?.status
);

export const selectStatusFetching = createSelector(
  [selectStatus],
  (status: IntegrationStatus) => status?.fetching
);

export const selectStatusData = createSelector(
  [selectStatus],
  (status: IntegrationStatus) => status?.data
);
