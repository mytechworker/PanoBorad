import ActionTypes from '../actionTypes';

import { ReportParamsModel } from 'types';

export function getCancellations(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/cancellations',
    type: ActionTypes.LOAD_REPORT_CANCELLATIONS,
    params,
  };
}
export function getHygiene(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/hygiene',
    type: ActionTypes.LOAD_REPORT_HYGIENE,
    params,
  };
}
export function getHygieneReappointment(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/hygiene-reappointment',
    type: ActionTypes.LOAD_REPORT_HYGIENE_REAPPOINTMENT,
    params,
  };
}
export function getNewPatients(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/new-patients',
    type: ActionTypes.LOAD_REPORT_NEW_PATIENTS,
    params,
  };
}
export function getProduction(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/production',
    type: ActionTypes.LOAD_REPORT_PRODUCTION,
    params,
  };
}
export function getRecare(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/recare',
    type: ActionTypes.LOAD_REPORT_RECARE,
    params,
  };
}
export function getRestorative(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/restorative',
    type: ActionTypes.LOAD_REPORT_RESTORATIVE,
    params,
  };
}
export function getVisit(params: ReportParamsModel) {
  return {
    method: 'get',
    url: '/report/visit',
    type: ActionTypes.LOAD_REPORT_VISIT,
    params,
  };
}
type OfficeParams = {
  page?: number;
  page_size?: number;
  title?: string;
};
export function getOfficeData(params: OfficeParams) {
  return {
    method: 'get',
    url: '/location-analytics/office',
    type: ActionTypes.LOAD_LOCATION_ANALYTICS_OFFICE,
    params,
  };
}

type SetHygeineGoalType = {
  goal: number;
  diagnostic_goal: number;
  acceptance_goal: number;
};

export function setHygieneGoal(
  params: { location_id: number },
  data: SetHygeineGoalType
) {
  return {
    method: 'post',
    url: '/report/hygiene',
    type: ActionTypes.REPORT_SET_HYGIENE_GOAL,
    params,
    data,
  };
}

type SetHygieneReappointmentGoalType = {
  goal: number;
};

export function setHygieneReappointmentGoal(
  params: { location_id: number },
  data: SetHygieneReappointmentGoalType
) {
  return {
    method: 'post',
    url: '/report/hygiene-reappointment',
    type: ActionTypes.REPORT_SET_HYGEINE_REAPPOINMENT_GOAL,
    params,
    data,
  };
}

type SetNewPatientsGoalType = {
  goal: number;
  hygiene_reappointment_goal: number;
  acceptance_goal: number;
};

export function setNewPatientsGoal(
  params: { location_id: number },
  data: SetNewPatientsGoalType
) {
  return {
    method: 'post',
    url: '/report/new-patients',
    type: ActionTypes.REPORT_SET_NEW_PATIONTS_GOAL,
    params,
    data,
  };
}

type setProductionGoalType = {
  goal: number;
};

export function setProductionGoal(
  params: { location_id: number },
  data: setProductionGoalType
) {
  return {
    method: 'post',
    url: '/report/production',
    type: ActionTypes.REPORT_SET_PRODUCTION_GOAL,
    params,
    data,
  };
}

type SetRestorativeGoalType = {
  goal: number;
  diagnostic_goal: number;
  acceptance_goal: number;
};

export function setRestorativeGoal(
  params: { location_id: number },
  data: SetRestorativeGoalType
) {
  return {
    method: 'post',
    url: '/report/restorative',
    type: ActionTypes.REPORT_SET_RESTORATIVE_GOAL,
    params,
    data,
  };
}

type SetVisitGoalType = {
  appointemnts: {
    goal: number;
  };
};

export function setVisitGoal(
  params: { location_id: number },
  data: SetVisitGoalType
) {
  return {
    method: 'post',
    url: '/report/visit',
    type: ActionTypes.REPORT_SET_VISIT_GOAL,
    params,
    data,
  };
}
