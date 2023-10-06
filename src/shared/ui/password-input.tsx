import { IconButton, InputAdornment, type TextFieldProps } from '@mui/material';
import React, { useState } from 'react';
import { TextField } from 'ui-kit';
import { EyeIcon, LockIcon } from 'ui-kit/assets/icons/24';

interface PasswordInputProps extends Omit<TextFieldProps, ''> {}

export const PasswordInput: React.FC<PasswordInputProps> = props => {
  const [showPassword, setShowPassword] = useState(false);

  const onClickIcon = () => {
    setShowPassword(show => !show);
  };

  return (
    // TODO: Поправить типизацию
    // eslint-disable-next-line
    // @ts-ignore
    <TextField
      variant="filled"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onClickIcon}>
              <EyeIcon />
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        ),
        disableUnderline: true
      }}
      {...props}
    />
  );
};
