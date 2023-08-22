import { createSelector } from 'reselect';
import { AllLocations, LocationState } from 'types';

const selectLocation = (state: any) => state.location;

export const selectAll = createSelector(
  [selectLocation],
  (location: LocationState) => location?.all
);

export const selectAllFetching = createSelector(
  [selectAll],
  (locations: AllLocations) => locations?.fetching
);

export const selectAllLocations = createSelector(
  [selectAll],
  (locations: AllLocations) => locations?.data
);

export const selectAllLocationsData = createSelector(
  [selectAll],
  (locations: AllLocations) => locations?.data?.data
);

export const selectStates = createSelector(
  [selectLocation],
  (location: LocationState) => location?.states
);
