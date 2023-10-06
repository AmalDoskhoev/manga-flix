import {
  UserEntity, mapUserDTOToUserEntity,
} from '@/shared/model';

import * as api from './login-form.api';
import { type LoginFormDTO } from './login-form.dto';
import { type LoginData } from './login-form.entities';
import { mapDTOToLoginData } from './login-form.mappers';

export const signIn = async (dto: LoginFormDTO): Promise<LoginData> => {
  const data = await api.signIn(dto);

  return mapDTOToLoginData(data);
};

export const getProfile = async (): Promise<UserEntity> => {
  const data = await api.getProfile();

  return mapUserDTOToUserEntity(data);
};
