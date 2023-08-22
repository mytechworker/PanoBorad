import { createSelector } from 'reselect';
import {
  ProviderState,
  ProviderListState,
  ProviderProductionState,
} from 'types';

const selectProviderState = (state: any) => state.provider;

export const selectProvider = createSelector(
  [selectProviderState],
  (provider: ProviderState) => provider?.list
);

export const selectProviderListFetching = createSelector(
  [selectProvider],
  (provider: ProviderListState) => provider?.fetching
);

export const selectProviderListData = createSelector(
  [selectProvider],
  (provider: ProviderListState) => provider?.data
);

export const selectProviderProduction = createSelector(
  [selectProviderState],
  (provider: ProviderState) => provider?.production
);

export const selectProviderProductionFetching = createSelector(
  [selectProviderProduction],
  (provider: ProviderProductionState) => provider?.fetching
);

export const selectProviderProductionData = createSelector(
  [selectProviderProduction],
  (provider: ProviderProductionState) => provider?.data
);
