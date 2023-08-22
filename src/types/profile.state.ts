import { User } from './users';

export interface ProfileState {
  profile: ProfileInfoState;
}

export interface ProfileInfoState {
  data?: User;
  fetching?: boolean;
}
