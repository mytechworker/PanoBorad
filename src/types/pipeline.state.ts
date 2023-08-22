import { PatientState } from './shared.state';

export interface PipelineState {
  patient: PatientState;
  opportunities: OpportunityState;
  tags: TagsState;
}
export interface OpportunityState {
  data?: OpportunityModel[];
  fetching?: boolean;
}
export interface OpportunityModel {
  pk: number;
  full_name: string;
  call_status: number;
}
export interface TagsState {
  data?: any;
  fetching?: boolean;
}
export interface PipeLineTagModel {
  pk: number;
  title: string;
  slug: string;
  color: string;
  location: string;
}
