import { createSelector } from 'reselect';
import { PracticeState, PracticeInfoState } from 'types';

const selectCompanyProfile = (state: any) => state.practice;

export const selectPractice = createSelector(
  [selectCompanyProfile],
  (practice: PracticeState) => practice?.Practice
);

export const loadPracticeFetching = createSelector(
  [selectPractice],
  (practice: PracticeInfoState) => practice?.fetching
);

export const selectPracticeInfo = createSelector(
  [selectPractice],
  (practice: PracticeInfoState) => practice?.data
);
