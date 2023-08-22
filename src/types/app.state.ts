import { LocationModel } from './location.state';

export interface AppState {
  location?: LocationModel;
  locations: number[];
}
