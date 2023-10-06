import {
  type UserDTO,
  type UserEntity
} from '.';

export const mapUserDTOToUserEntity = (user: UserDTO): UserEntity => ({
  id: user.id,
  nickname: user.nickname,
  born: user.born,
  email: user.email,
  phone: user.phone,
  avatar: user.avatar
});

