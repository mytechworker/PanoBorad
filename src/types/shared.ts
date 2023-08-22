export interface GridItemLocationModel {
  i: string;
  h: number;
  w: number;
  x: number;
  y: number;
  isBounded?: boolean;
  isDraggable?: boolean;
  isResizable?: boolean;
  maxH?: number;
  maxW?: number;
  minH?: number;
  minW?: number;
  moved?: boolean;
  resizeHandles?: any;
  static?: boolean;
}
export interface PatientNumberModel {
  pk: number;
  last_message: string;
  unread_messages: number;
  patient: number;
  phone_number: string;
  archive: boolean;
  last_message_date: string;
  patient_name: string;
}
export interface PatientModel {
  pk: number;
  dentrix_id: number;
  first_name: string;
  last_name: string;
  preferred_name: string;
  date_of_birth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  status: string;
  postal_code: string;
  location_dentrix_id: string;
  last_modified: string;
  pipeline_name: string;
  tags: TagModel[];
  notes: NoteModel[];
  visit_data: PatientVisitModel;
  last_contacted: string;
}
export interface TagModel {
  pk: number;
  title: string;
  slug: string;
  color: string;
  location: number;
}
export interface NoteModel {
  pk: number;
  note: string;
  patient: number;
  author: string;
  created_at: string;
}
export interface PhoneModel {
  number: string;
}
export interface PatientVisitModel {
  last_visit: string;
  last_visit_type: string;
  next_visit: string;
  next_visit_type: string;
}
