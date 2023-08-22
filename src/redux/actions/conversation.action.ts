import ActionTypes from '../actionTypes';

type PatientNumberParams = {
  page?: number;
  page_size?: number;
  location_id: number;
  search?: string;
};
export function loadAllPatientNumbers(params: PatientNumberParams) {
  return {
    method: 'get',
    url: '/conversation/patient-numbers',
    type: ActionTypes.LOAD_ALL_CONVERSATION_PATIENT_NUMBER,
    params,
  };
}
type ChatParams = {
  location_id: number;
  search?: string;
};
export function loadChats(id: number, params: ChatParams) {
  return {
    method: 'get',
    url: `/conversation/patient-numbers/${id}/chats`,
    type: ActionTypes.LOAD_PATIENT_NUMBER_CHATS,
    params,
  };
}
type ChatData = {
  body: string;
};

export function createChat(id: number, data: ChatData, location_id: number) {
  return {
    method: 'post',
    url: `/conversation/patient-numbers/${id}/reply`,
    type: ActionTypes.CREATE_PATIENT_NUMBER_CHATS,
    data,
    params: { location_id },
  };
}

export function readChat(id: number, location_id: number) {
  return {
    method: 'post',
    url: `/conversation/patient-numbers/${id}/read`,
    type: ActionTypes.READ_PATIENT_NUMBER_CHATS,
    params: { location_id },
  };
}
export function archiveChat(id: number, location_id: number) {
  return {
    method: 'post',
    url: `/conversation/patient-numbers/${id}/archive`,
    type: ActionTypes.ARCHIVE_PATIENT_NUMBER_CHATS,
    params: { location_id },
  };
}
export function restoreChat(id: number, location_id: number) {
  return {
    method: 'post',
    url: `/conversation/patient-numbers/${id}/restore`,
    type: ActionTypes.RESTORE_PATIENT_NUMBER_CHATS,
    params: { location_id },
  };
}
export function deleteChat(id: number, location_id: number) {
  return {
    method: 'delete',
    url: `/conversation/patient-numbers/${id}/delete`,
    type: ActionTypes.DELETE_PATIENT_NUMBER_CHATS,
    params: { location_id },
  };
}
export function loadPatient(id?: number) {
  return {
    method: 'get',
    url: `/conversation/patients/${id}`,
    type: ActionTypes.LOAD_CONVERSATION_PATIENT_NUMBER,
  };
}
type ChatTagParams = {
  id?: number;
  tag_id: number;
};
export function createChatTag(params: ChatTagParams) {
  return {
    method: 'post',
    url: `/conversation/patients/${params.id}/tags/${params.tag_id}`,
    type: ActionTypes.CREATE_CONVERSATION_TAGS,
  };
}
export function deleteChatTag(params: ChatTagParams) {
  return {
    method: 'delete',
    url: `/conversation/patients/${params.id}/tags/${params.tag_id}`,
    type: ActionTypes.DELETE_CONVERSATION_TAGS,
  };
}
type NumbersParams = {
  location_id?: number;
  search?: string;
};
export function loadConversationNumbers(params: NumbersParams) {
  return {
    method: 'get',
    url: '/conversation/patient-numbers/numbers',
    type: ActionTypes.LOAD_CONVERSATION_NUMBERS,
    params,
  };
}
type PatientData = {
  first_name: string;
  last_name: string;
};
export function updateConversationPatient(
  id: number | undefined,
  data: PatientData
) {
  return {
    method: 'patch',
    url: `/conversation/patients/${id}`,
    type: ActionTypes.UPDATE_CONVERSATION_PATIENT,
    data,
  };
}
