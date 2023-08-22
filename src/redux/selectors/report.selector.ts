import { createSelector } from 'reselect';
import {
  OfficeState,
  ReportState,
  RecareStateModel,
  CancellationStateModel,
  HygieneStateModel,
  ReappointmentStateModel,
  PatientsStateModel,
  ProductionStateModel,
  RestorativeStateModel,
  VisitStateModel,
} from 'types';

const selectReport = (state: any) => state.report;

// REPORT_RECARE
export const selectRecareState = createSelector(
  [selectReport],
  (report: ReportState) => report?.recare
);
export const selectRecareFetching = createSelector(
  [selectRecareState],
  (recare: RecareStateModel) => recare?.fetching
);
export const selectRecareData = createSelector(
  [selectRecareState],
  (recare: RecareStateModel) => recare?.data
);

// REPORT_CANCELLATIONS
export const selectCancellationState = createSelector(
  [selectReport],
  (report: ReportState) => report?.cancellation
);
export const selectCancellationFetching = createSelector(
  [selectCancellationState],
  (cancellation: CancellationStateModel) => cancellation?.fetching
);
export const selectCancellationData = createSelector(
  [selectCancellationState],
  (cancellation: CancellationStateModel) => cancellation?.data
);

// REPORT_HYGIENE
export const selectHygieneState = createSelector(
  [selectReport],
  (report: ReportState) => report?.hygiene
);
export const selectHygieneFetching = createSelector(
  [selectHygieneState],
  (hygiene: HygieneStateModel) => hygiene?.fetching
);
export const selectHygieneData = createSelector(
  [selectHygieneState],
  (hygiene: HygieneStateModel) => hygiene?.data
);

// REPORT_HYGIENE
export const selectReappointmentState = createSelector(
  [selectReport],
  (report: ReportState) => report?.reappointment
);
export const selectReappointmentFetching = createSelector(
  [selectReappointmentState],
  (reappointment: ReappointmentStateModel) => reappointment?.fetching
);
export const selectReappointmentData = createSelector(
  [selectReappointmentState],
  (reappointment: ReappointmentStateModel) => reappointment?.data
);

// REPORT_NEW_PATIENTS
export const selectPatientsState = createSelector(
  [selectReport],
  (report: ReportState) => report?.patients
);
export const selectPatientsFetching = createSelector(
  [selectPatientsState],
  (patients: PatientsStateModel) => patients?.fetching
);
export const selectPatientsData = createSelector(
  [selectPatientsState],
  (patients: PatientsStateModel) => patients?.data
);

// REPORT_PRODUCTION
export const selectProductionState = createSelector(
  [selectReport],
  (report: ReportState) => report?.production
);
export const selectProductionFetching = createSelector(
  [selectProductionState],
  (production: ProductionStateModel) => production?.fetching
);
export const selectProductionData = createSelector(
  [selectProductionState],
  (production: ProductionStateModel) => production?.data
);

// LOAD_REPORT_RESTORATIVE
export const selectRestorativeState = createSelector(
  [selectReport],
  (report: ReportState) => report?.restorative
);
export const selectRestorativeFetching = createSelector(
  [selectRestorativeState],
  (restorative: RestorativeStateModel) => restorative?.fetching
);
export const selectRestorativeData = createSelector(
  [selectRestorativeState],
  (restorative: RestorativeStateModel) => restorative?.data
);

// LOAD_REPORT_VISIT
export const selectVisitState = createSelector(
  [selectReport],
  (report: ReportState) => report?.visit
);
export const selectVisitFetching = createSelector(
  [selectVisitState],
  (visit: VisitStateModel) => visit?.fetching
);
export const selectVisitData = createSelector(
  [selectVisitState],
  (visit: VisitStateModel) => visit?.data
);

export const selectOffice = createSelector(
  [selectReport],
  (report: ReportState) => report?.office
);

export const selectOfficeFetching = createSelector(
  [selectOffice],
  (office: OfficeState) => office?.fetching
);

export const selectOfficeData = createSelector(
  [selectOffice],
  (office: OfficeState) => office?.data
);
