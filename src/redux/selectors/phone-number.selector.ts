import { createSelector } from 'reselect';
import { PhoneNumberState } from 'types';

const selectPhoneNumber = (state: any) => state.phoneNumber;

export const selectPhoneNumberList = createSelector(
  [selectPhoneNumber],
  (phoneNumber: PhoneNumberState) => phoneNumber?.allNumbers
);

export const selectAvailablePhoneNumberList = createSelector(
  [selectPhoneNumber],
  (phoneNumber: PhoneNumberState) => phoneNumber?.availableNumbers
);
