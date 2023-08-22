export interface ReportParamsModel {
  end_time: string;
  location_id: number;
  start_time: string;
  page?: number;
  page_size?: number;
}
export interface RecareModel {
  patients_0_to_6_month: number;
  patients_6_to_9_month: number;
  patients_9_to_12_month: number;
  patients_12_to_18_month: number;
  patients_over_18_month: number;
  unscheduled_active_patients: number;
  unschedules_opportunity: number;
  est_annual_opportunity: number;
  rescheduled_patients: number;
  rescheduled_production: number;
}
export interface CancellationModel {
  percentage: number;
  scheduled: number;
  cancelled: number;
  uscheduled: number;
}
export interface HygieneModel {
  diagnostic_goal: number;
  acceptance_goal: number;
  diagnostic_actual: number;
  acceptance_actual: number;
  presented: number;
  accepted: number;
  accepted_percentage: number;
  average: number;
  goal: number;
}
export interface ReappointmentModel {
  goal: number;
  hygiene_reappointment: number;
  visits: number;
  reappointment: number;
  unscheduled: number;
}
export interface PatientsModel {
  goal: number;
  new_patient: number;
  recaptured: number;
  lost: number;
  growth: number;
  hygiene_reappointment_goal: number;
  hygiene_reappointment_actual: number;
  acceptance_goal: number;
  acceptance_actual: number;
}
export interface ProductionModel {
  goal: number;
  scheduled: number;
  gross_production: number;
  adjustment: number;
  net_production: number;
  chart: ProductionChartModel[];
}

export interface ProductionChartModel {
  date: string;
  total: number;
  restorative: number;
  hygiene: number;
  uncategorized: number;
}

export interface RestorativeModel {
  goal: number;
  average: number;
  presented: number;
  accepted: number;
  accepted_percentage: number;
  diagnostic_goal: number;
  diagnostic_actual: number;
  acceptance_goal: number;
  acceptance_actual: number;
}
export interface VisitModel {
  appointemnts: VisitAppointemntsModel;
  visits_bar: VisitBarModel[];
}

export interface VisitAppointemntsModel {
  completed: number;
  scheduled: number;
  broken: number;
  goal: number;
}

export interface VisitBarModel {
  hygien: number;
  restorative: number;
  uncategorized: number;
  date: string;
}
