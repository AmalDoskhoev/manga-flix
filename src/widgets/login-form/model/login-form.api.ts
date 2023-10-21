import { Endpoints } from '@/shared';
import axios from '@/shared/core/axios';
import { type UserDTO } from '@/shared/model';

import { type LoginFormDTO, type LoginResponseDTO } from './login-form.dto';

export const signIn = async (form: LoginFormDTO): Promise<LoginResponseDTO> => {
  return (await axios.post(Endpoints.AUTH_LOGIN, form)).data;
};

export const getProfile = async (): Promise<UserDTO> => {
  return (await axios.get(Endpoints.USER)).data;
};
