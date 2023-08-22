import { createSelector } from 'reselect';
import { AppState } from 'types';

const selectApp = (state: any) => state.app;

export const selectLocationInfo = createSelector(
  [selectApp],
  (app: AppState) => app?.location
);

export const selectLocationsInfo = createSelector(
  [selectApp],
  (app: AppState) => app?.locations
);
