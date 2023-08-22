import {
  RecareModel,
  CancellationModel,
  HygieneModel,
  ReappointmentModel,
  PatientsModel,
  ProductionModel,
  RestorativeModel,
  VisitModel,
} from 'types';

export interface ReportState {
  recare: RecareStateModel;
  cancellation: CancellationStateModel;
  hygiene: HygieneStateModel;
  reappointment: ReappointmentStateModel;
  patients: PatientsStateModel;
  production: ProductionStateModel;
  restorative: RestorativeStateModel;
  visit: VisitStateModel;
  office: OfficeState;
}

export interface RecareStateModel {
  data?: RecareModel;
  fetching?: boolean;
}

export interface CancellationStateModel {
  data?: CancellationModel;
  fetching?: boolean;
}
export interface HygieneStateModel {
  data?: HygieneModel;
  fetching?: boolean;
}
export interface ReappointmentStateModel {
  data?: ReappointmentModel;
  fetching?: boolean;
}
export interface PatientsStateModel {
  data?: PatientsModel;
  fetching?: boolean;
}
export interface ProductionStateModel {
  data?: ProductionModel;
  fetching?: boolean;
}
export interface RestorativeStateModel {
  data?: RestorativeModel;
  fetching?: boolean;
}
export interface VisitStateModel {
  data?: VisitModel;
  fetching?: boolean;
}

export interface OfficeState {
  data?: any;
  fetching?: boolean;
}
