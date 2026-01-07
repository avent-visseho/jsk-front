export interface ILogin {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface IRegister {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  auth_token: string;
  refresh_token: string;
  email: string;
  user?: any;
  admin?: any;
  message: string;
  success: boolean;
}
