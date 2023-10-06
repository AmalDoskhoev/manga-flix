import { Button as MuiButton } from '@mui/material';
import { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import React from 'react';

export const Button: React.FC<MuiButtonProps> = (props: MuiButtonProps) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};
