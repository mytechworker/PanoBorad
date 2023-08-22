export interface ChatModel {
  pk: number;
  body: string;
  chat_type: number;
  read: boolean;
  created_at: string;
}
export interface NumberModel {
  pk: string;
  phone_number: string;
  patient_name: string;
}
