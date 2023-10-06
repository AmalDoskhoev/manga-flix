import { TextField as MuiTextField } from '@mui/material';
import { type TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import React from 'react';

export const TextField: React.FC<MuiTextFieldProps> = props => {
  return <MuiTextField {...props} />;
};
