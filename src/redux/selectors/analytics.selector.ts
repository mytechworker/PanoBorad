import { createSelector } from 'reselect';
import { AnalitycsState, MapDataState } from 'types';

const selectAnalytics = (state: any) => state.analytics;

export const selectLocationsState = createSelector(
  [selectAnalytics],
  (map: AnalitycsState) => map?.mapList
);

export const selectMapFetching = createSelector(
  [selectLocationsState],
  (map: MapDataState) => map?.fetching
);

export const selectMapData = createSelector(
  [selectLocationsState],
  (map: MapDataState) => map?.data
);
