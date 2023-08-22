import { string } from 'yup/lib/locale';
import ActionTypes from '../actionTypes';

type ProviderParams = {
  page?: number;
  page_size?: number;
  provider_name?: string;
};
export function getProviderList(params: ProviderParams) {
  return {
    method: 'get',
    url: '/provider-analytics/provider-list',
    type: ActionTypes.LOAD_PROVIDER_LIST,
    params,
  };
}
export function getProviderProduction(params: any) {
  return {
    method: 'get',
    url: '/provider-analytics/provider-production',
    type: ActionTypes.LOAD_PROVIDER_PRODUCTION,
    params,
  };
}

export function getProviderListExport(params: { provider_name?: string }) {
  return {
    method: 'get',
    url: '/provider-analytics/provider-list/export',
    type: ActionTypes.LOAD_PROVIDER_LIST_EXPORT,
    params,
    responseType: 'blob',
  };
}
