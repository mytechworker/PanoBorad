export interface LocationState {
  all: AllLocations;
  states: LocationStatesModel;
}

export interface AllLocations {
  data?: LocationData;
  fetching?: boolean;
}

export interface LocationStatesModel {
  data?: string[];
  fetching?: boolean;
}

export interface LocationData {
  num_of_pages: number;
  count: number;
  meta: LocationMeta;
  data: LocationModel[];
}

export interface LocationModel {
  pk: number;
  title: string;
  address: string;
  logo: string;
  website: string;
  phone_number: string;
  city?: string;
  dentrix_id?: string;
  state?: string;
  user?: string;
  email?: string;
  location_timezone: string;
  country?: string;
  longitude?: number;
  latitude?: number;
}

export interface PatchLocationModel {
  title?: string;
  address?: string;
  logo?: string;
  website?: string;
  phone_number?: string;
  city?: string;
  dentrix_id?: string;
  state?: string;
  user?: string;
}

export interface LocationMeta {
  ordering: string;
}
