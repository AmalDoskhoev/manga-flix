import * as yup from 'yup';

export const loginFormSchema = yup.object({
  phone: yup.string().required('Не указан логин'),
  password: yup.string().required('Не указан пароль'),
  device_name: yup.string().required('Не указан тип устройства')
});
