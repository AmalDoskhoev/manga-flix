export interface LoginFormDTO {
  phone: string;
  password: string;
  device_name: string;
}

export interface LoginResponseDTO {
  token: string;
  user_id: number;
}
