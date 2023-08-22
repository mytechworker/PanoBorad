import ActionTypes from '../actionTypes';

export function loadPipelinePatient(id?: number) {
  return {
    method: 'get',
    url: `/pipeline/patients/${id}`,
    type: ActionTypes.LOAD_PIPELINE_PATIENT_NUMBER,
  };
}
type OpportunityParams = {
  location_id: number;
  pipeline_name?: string;
  search?: string;
  name?: string;
  tags__title__icontains?: string;
  due_date?: string;
};
export function loadOpportunities(params: OpportunityParams) {
  return {
    method: 'get',
    url: `/pipeline/opportunities`,
    type: ActionTypes.LOAD_PIPELINE_OPPORTUNITY,
    params,
  };
}
export function exportOpportunities(params: OpportunityParams) {
  return {
    method: 'get',
    url: `/pipeline/opportunities/export`,
    type: ActionTypes.EXPORT_PIPELINE_OPPORTUNITY,
    params,
    responseType: 'blob',
  };
}
type OpportunityStausParams = {
  location_id: number;
};
type OpportunityStausData = {
  call_status?: number;
};
export function updateOpportunityStatus(
  id: number,
  params: OpportunityStausParams,
  data: OpportunityStausData
) {
  return {
    method: 'patch',
    url: `/pipeline/opportunities/${id}`,
    type: ActionTypes.UPDATE_PIPELINE_OPPORTUNITY_STATUS,
    params,
    data,
  };
}
type TagsParams = {
  page: number;
  page_size: string;
  search?: string;
};
export function loadAllTags(params: TagsParams) {
  return {
    method: 'get',
    url: `/pipeline/tags`,
    type: ActionTypes.LOAD_PIPELINE_TAGS,
    params,
  };
}
type TagsData = {
  title: string;
  color: string;
  location?: number;
};
export function createTag(data: TagsData) {
  return {
    method: 'post',
    url: `/pipeline/tags`,
    type: ActionTypes.CREATE_TAG,
    data,
  };
}

export function updateTag(id: number, data: TagsData) {
  return {
    method: 'put',
    url: `/pipeline/tags/${id}`,
    type: ActionTypes.UPDATE_TAG,
    data,
  };
}
export function removeTag(id: number) {
  return {
    method: 'delete',
    url: `/pipeline/tags/${id}`,
    type: ActionTypes.DELETE_TAG,
  };
}
type PipeLineTagParams = {
  id?: number;
  tag_id?: string;
};
export function createPipelineTag(params: PipeLineTagParams) {
  return {
    method: 'post',
    url: `/pipeline/patients/${params.id}/tags/${params.tag_id}`,
    type: ActionTypes.ADD_PIPELINE_TAG,
  };
}
export function deletePipelineTag(params: PipeLineTagParams) {
  return {
    method: 'delete',
    url: `/pipeline/patients/${params.id}/tags/${params.tag_id}`,
    type: ActionTypes.DELETE_PIPELINE_TAGS,
  };
}
type PipeLineNoteData = {
  note?: string;
  patient?: number;
};
export function createPipelineNot(data: PipeLineNoteData) {
  return {
    method: 'post',
    url: `/pipeline/notes`,
    type: ActionTypes.CREATE_PIPELINE_NOTE,
    data,
  };
}
export function removeNot(id: number) {
  return {
    method: 'delete',
    url: `/pipeline/notes/${id}`,
    type: ActionTypes.DELETE_PIPELINE_NOTE,
  };
}
type PatientData = {
  first_name: string;
  last_name: string;
};
export function updatePipelinePatient(
  id: number | undefined,
  data: PatientData
) {
  return {
    method: 'patch',
    url: `/pipeline/patients/${id}`,
    type: ActionTypes.UPDATE_PIPELINE_PATIENT,
    data,
  };
}
