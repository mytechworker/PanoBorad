import ActionTypes from '../actionTypes';

export function handleToggleSideMenu(payload: boolean) {
  return {
    type: ActionTypes.TOGGLE_SIDE_MENU,
    payload,
  };
}
export function handleTogglePatientCard(payload: boolean) {
  return {
    type: ActionTypes.TOGGLE_PATIENT_CARD,
    payload,
  };
}
export function handleSetPatientCard(payload: string) {
  return {
    type: ActionTypes.SET_PATIENT_CARD_TYPE,
    payload,
  };
}
export function handleSetPatientId(payload: number) {
  return {
    type: ActionTypes.SET_PATIENT_ID,
    payload,
  };
}
