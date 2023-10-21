import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormControlLabel,
  InputAdornment,
  Link,
  Typography
} from '@mui/material';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox } from 'ui-kit';
import { AtSignIcon } from 'ui-kit/assets/icons/24';

import { selectSetLoading, useUserStore } from '@/app/stores';
import { routes } from '@/shared';
import { useCheckDisabled } from '@/shared/hooks';
import { errorNotification } from '@/shared/libs';
import { ControlledInput, ControlledPasswordInput } from '@/shared/ui/form';

import { api } from '../model';
import { type LoginFormDTO } from '../model/login-form.dto';
import { loginFormSchema } from '../model/login-form.schemas';
import styles from './login-form.module.scss';

export const LoginForm: React.FC = () => {
  const setLoading = useUserStore(selectSetLoading);
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      phone: '',
      password: '',
      device_name: ''
    },
    resolver: yupResolver(loginFormSchema)
  });

  const { control, handleSubmit, setValue } = form;

  const onSubmit: SubmitHandler<LoginFormDTO> = async values => {
    try {
      setValue('device_name', 'desctop');
      await api.signIn(values);

      setLoading(true);
      navigate(routes.table);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      errorNotification(error);
    }
  };

  const isDisabled = useCheckDisabled(form.formState);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-10 w-full"
    >
      <Typography variant="h3">Вход в Аккаунт</Typography>
      <div>
        <div className="mb-3">
          <ControlledInput
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AtSignIcon />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            name="phone"
            control={control}
            variant="filled"
            placeholder="Электронный адрес"
          />
        </div>

        <div className="mb-5">
          <ControlledPasswordInput
            name="password"
            control={control}
            placeholder="Пароль"
          />
        </div>

        <div className="flex items-center justify-between">
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                className={styles.loginCheckbox}
                defaultChecked
              />
            }
            label="Запомнить меня"
            className={styles.checkboxLabel}
          />
          <Link href="#" variant="body1">
            Забыли пароль?
          </Link>
        </div>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        data-testid="login-button"
        fullWidth
        disabled={isDisabled}
      >
        Войти
      </Button>
    </form>
  );
};
