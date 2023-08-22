export interface LoginEmailResult {
  email: string;
  password: string;
  access: string;
  refresh: string;
}

export interface SetNewPasswordResult {
  access: string;
  refresh: string;
}
