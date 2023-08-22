export interface ProviderState {
  list: ProviderListState;
  production: ProviderProductionState;
}

export interface ProviderListState {
  data?: ProviderListDataModel;
  fetching?: boolean;
}
export interface ProviderListDataModel {
  count: number;
  next: string;
  previous: string;
  data: ProviderListItemModel[];
}
export interface ProviderListItemModel {
  name: string;
  gross: number;
  net: number;
  adjustment: number;
  collection: number;
  location_name: string;
  daily_average: number;
  month_to_date: number;
  acceptance_rate: number;
}

export interface ProviderProductionState {
  data?: ProviderProductionItemModal;
  fetching?: boolean;
}
export interface ProviderProductionItemModal {
  id: number;
  net: string;
  provider_name: string;
}
