import { createSelector } from 'reselect';
import { ProfileState, ProfileInfoState } from 'types';

const selectUserProfile = (state: any) => state.profile;

export const selectProfile = createSelector(
  [selectUserProfile],
  (profile: ProfileState) => profile?.profile
);

export const loadProfileFetching = createSelector(
  [selectProfile],
  (profile: ProfileInfoState) => profile?.fetching
);

export const selectProfileInfo = createSelector(
  [selectProfile],
  (profile: ProfileInfoState) => profile?.data
);
