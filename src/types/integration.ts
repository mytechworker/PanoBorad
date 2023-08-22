export interface IntegrationState {
  locations: Dentrixlocations;
  status: IntegrationStatus;
}

export interface Dentrixlocations {
  fetching?: boolean;
  data?: DentrixLocation[];
  error?: any;
}

export interface DentrixLocation {
  id: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
}

export interface IntegrationStatus {
  fetching?: boolean;
  data?: IntegrationStatusData;
  error?: any;
}

export interface IntegrationStatusData {
  is_google_connected: boolean;
  is_twilio_connected: boolean;
  is_dentrix_connected: boolean;
  is_facebook_connected: boolean;
}

export interface DentrixConnectData {
  client_id: string;
  client_secret: string;
}
