import { PhoneNumberModel } from './phone-number';

export interface PhoneNumberState {
  allNumbers: PhoneNumberListState;
  availableNumbers: PhoneNumberListState;
}

export interface PhoneNumberListState {
  data?: PhoneNumberModel;
  fetching?: boolean;
}
