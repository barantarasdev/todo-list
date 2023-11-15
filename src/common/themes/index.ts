import { createTheme } from '@mui/material'

import lightPalette from '@/common/themes/lightPalette'
import { HEADER_HEIGHT, PRIMARY_PADDING } from '@/constants'

const {
  palette: { text, primary },
} = lightPalette

const theme = createTheme({
  ...lightPalette,
  spacing: 5,
  transitions: {
    duration: {
      standard: 200,
    },
  },
  typography: {
    allVariants: {
      fontWeight: 500,
      fontSize: 20,
    },
    h2: {
      fontSize: 60,
      fontWeight: 700,
      textAlign: 'center',
    },
    h3: {
      fontSize: 40,
      fontWeight: 700,
      textAlign: 'center',
    },
    subtitle1: {
      textAlign: 'center',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body, html {
          height: 100%;
        }

        body {
          background-image: url('/assets/images/bg.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
          scroll-behavior: smooth;
        }
      `,
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: text.primary,
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: 'center',
        },
      },
      defaultProps: {
        severity: 'error',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: primary.light,
            borderRadius: 0,
          },
        },
      },
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-input': {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px inset',
              transitionDelay: '9999s',
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 13,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: text.secondary,
          fontWeight: 700,
        },
      },
      defaultProps: {
        variant: 'contained',
        size: 'large',
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: lightPalette.palette.text.primary,
          },
          '& .MuiSelect-icon': {
            color: lightPalette.palette.text.primary,
          },
        },
      },
      defaultProps: {
        fullWidth: true,
        displayEmpty: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: HEADER_HEIGHT,
          padding: `0 ${PRIMARY_PADDING}px`,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'fixed',
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        keepMounted: true,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        disableScrollLock: true,
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
})

export default theme
