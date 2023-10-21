import { type LoginResponseDTO } from './login-form.dto';
import { type LoginData } from './login-form.entities';

export const mapDTOToLoginData = (dto: LoginResponseDTO): LoginData => ({
  token: dto.token,
  userId: dto.user_id
});
