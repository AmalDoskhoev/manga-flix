import { ThemeProvider } from '@mui/material';
import React from 'react';
import { themes } from 'ui-kit';

export const withTheme = (component: () => React.ReactNode) => () => (
  <ThemeProvider theme={themes.lightTheme}>{component()}</ThemeProvider>
);
