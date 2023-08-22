export interface AppointmentModel {
  end_time: string;
  location_id: number;
  start_time: string;
  created_time: string;
  booking_status: string;
  pk: number;
  patient: PatienModel;
  dentrix_error?: string;
}

export interface PatienModel {
  full_name: string;
  date_of_birth: string;
  email: string;
  phones: string;
  status: string;
}

export interface AppointmentTypesDataModel {
  num_of_pages: number;
  count: number;
  meta: AppointmentTypesMetaModel;
  data: AppointmentTypeModel[];
}
export interface AppointmentTypesMetaModel {
  location_id: string;
  ordering: string;
}

export interface AppointmentTypeModel {
  pk?: number;
  title?: string;
  duration?: number;
  location?: number;
}
export interface AvailableProviderModel {
  pk: number;
  full_name: string;
}
export interface AvailableOperatoryModel {
  pk: number;
  name: string;
}

export interface AppointmentsCalendarModel {
  pk: number;
  patient: AppointmentsCalendarPatientModel;
  created_time: string;
  start_time: string;
  booking_status: string;
}

export interface AppointmentsCalendarPatientModel {
  full_name: string;
  date_of_birth: string;
  email: string;
  phones: string;
  status: string;
}
export interface AddNewBookingLocationModel {
  title: string;
  address: string;
  city: string;
  email: null;
  location_timezone: null;
  country: null;
  state: string;
  logo: null;
  website: string;
  phone_number: number;
  dentrix_id: string;
  longitude: number;
  latitude: number;
}
export interface AddNewBookingModel {
  first_name: string;
  last_name: string;
  email: string;
  call_phone: string;
  gender: string;
  date_of_birth: string;
  city: string;
  state: string;
  address: string;
  postal_code: string;
  note: string;
  date: string;
  start_time: string;
  appointment_type: number;
  location: number;
  patient_insurance: number;
}
export interface ProviderModel {
  pk: number;
  dentrix_id: number;
  first_name: string;
  last_name: string;
  specialty: string;
  photo: {
    pk: number;
    media: string;
  };
  active: boolean;
  appointment_types: AppointmentTypeModel[];
  workinghours: WorkingHoursModel[];
  blockhours: BlockHoursModel[];
  insurances: InsuranceModel[];
}
export interface WorkingHoursModel {
  pk: number;
  week_days: [];
  start_time: string;
  end_time: string;
  provider: number;
  location: number;
  date?: string;
}
export interface BlockHoursModel {
  pk: number;
  date: string;
  start_time: string;
  end_time: string;
  provider: number;
  location: number;
}
export interface InsuranceModel {
  pk: number;
  name: string;
  payor_id: string;
  creator?: string;
  source?: number;
}
export interface ProviderSpecialityModel {
  pk: number;
  title: string;
}
export interface WorkingHourModel {
  week_days?: [];
  start_time: string;
  end_time: string;
  date?: string;
  unit?: string;
  number?: string;
  provider: number;
  location?: number;
}

export interface AllInsurancesModel {
  count: number;
  next: string;
  previous: string;
  results: InsuranceModel[];
}
