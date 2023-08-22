import { createSelector } from 'reselect';
import { SettingState } from 'types';

const selectSetting = (state: any) => state.setting;

export const selectData = createSelector(
  [selectSetting],
  (report: SettingState) => report?.data
);

export const selectFetching = createSelector(
  [selectSetting],
  (report: SettingState) => report?.fetching
);
