import { PatientNumberModel, PatientModel } from './shared';

export interface PatientNumberListState {
  data?: PatientNumberModel;
  fetching?: boolean;
}

export interface PatientState {
  data?: PatientModel;
  fetching?: boolean;
}
