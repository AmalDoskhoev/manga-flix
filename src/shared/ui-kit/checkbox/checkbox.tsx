import { Checkbox as MuiChekbox } from '@mui/material';
import { type CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import React from 'react';

export const Checkbox: React.FC<MuiCheckboxProps> = (
  props: MuiCheckboxProps
) => {
  return <MuiChekbox {...props} />;
};
