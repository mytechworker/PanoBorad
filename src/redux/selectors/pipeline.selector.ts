import { createSelector } from 'reselect';
import { PipelineState } from 'types';

const selectPipeline = (state: any) => state.pipeline;

export const selectPatient = createSelector(
  [selectPipeline],
  (pipeline: PipelineState) => pipeline?.patient
);
export const selectOpportunity = createSelector(
  [selectPipeline],
  (pipeline: PipelineState) => pipeline?.opportunities
);
export const selectTags = createSelector(
  [selectPipeline],
  (pipeline: PipelineState) => pipeline?.tags
);
