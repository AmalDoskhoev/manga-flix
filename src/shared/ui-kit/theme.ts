import { blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import { COLORS } from '.';

export const lightTheme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primary_500
    },
    secondary: {
      main: COLORS.bw_900_b
    },
    info: {
      main: COLORS.primary_100
    }
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito Sans',
          fontStyle: 'normal',
          borderRadius: '8px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito Sans',
          fontStyle: 'normal',
          color: COLORS.bw_900_b,
          '&.MuiTypography-h1': {
            fontWeight: 900,
            fontSize: '36px',
            lineHeight: '100%'
          },
          '&.MuiTypography-h2': {
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: '140%'
          },
          '&.MuiTypography-h3': {
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '100%'
          },
          '&.MuiTypography-h4': {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '125%'
          },
          '&.MuiTypography-body1': {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '125%'
          },
          '&.MuiTypography-body2': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '100%'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito Sans',
          fontStyle: 'normal',
          fontWeight: 400,
          color: COLORS.primary_600,
          textDecoration: 'none',
          '&.MuiTypography-body1': {
            fontSize: '14px',
            lineHeight: '125%',
            color: COLORS.primary_600
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: 0,
          fontFamily: 'Nunito Sans',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '125%',
          color: COLORS.neutral_400,
          borderRadius: '8px'
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&.MuiInputAdornment-filled': {
            marginTop: '0px !important'
          }
        },
        positionStart: {
          marginRight: 0
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: 'none',
          backgroundColor: COLORS.neutral_100
        },
        input: {
          padding: '12px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Replace with your preferred value
          boxShadow: 'none', // Replace with your preferred box-shadow
          fontFamily: 'Nunito Sans',
          fontStyle: 'normal',
          textTransform: 'none'
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: COLORS.primary_500
    },
    secondary: {
      main: COLORS.primary_300
    },
    background: {
      default: blueGrey['800'],
      paper: blueGrey['700']
    }
  }
});
