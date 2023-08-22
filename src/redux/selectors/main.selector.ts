import { createSelector } from 'reselect';
import { MainState } from 'types';

const selectMain = (state: any) => state.main;

export const selectSideMenu = createSelector(
  [selectMain],
  (main: MainState) => main?.sideMenu
);

export const selectPatientCardStatus = createSelector(
  [selectMain],
  (main: MainState) => main?.patientCardStatus
);

export const selectPatientCardType = createSelector(
  [selectMain],
  (main: MainState) => main?.patientCardType
);

export const selectPatientId = createSelector(
  [selectMain],
  (main: MainState) => main?.patientId
);
