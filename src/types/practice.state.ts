import { Company } from './users';

export interface PracticeState {
  Practice: PracticeInfoState;
}

export interface PracticeInfoState {
  data?: Company;
  fetching?: boolean;
}
