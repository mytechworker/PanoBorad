export interface AllUsers {
  count: number;
  next: string;
  previous: string;
  data: User[];
}

export interface User {
  pk: number;
  first_name: string;
  last_name: string;
  photo: any;
  phone_number: string;
  phone_number_extension: string;
  email: string;
  role: string;
  user_type: string;
  permissions: number[];
  locations: any[];
  password: string;
}

export interface Company {
  pk: number;
  title: string;
  address: string;
  city: string;
  email: string;
  location_timezone: string;
  country: string;
  state: string;
  logo: string;
  website: string;
  phone_number: string;
  user: number;
  dentrix_id: number;
}

export interface Role {
  title: string;
  number: number;
}
