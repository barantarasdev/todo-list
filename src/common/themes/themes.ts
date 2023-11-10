import { createTheme } from '@mui/material'
import lightPalette from 'src/common/themes/lightPalette'
import { HEADER_HEIGHT } from 'src/constants'

const theme = createTheme({
  ...lightPalette,
  spacing: 5,
  transitions: {
    duration: {
      standard: 200,
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    allVariants: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 700,
      fontSize: 70,
    },
    h1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            src: local('Montserrat Medium'), local('Montserrat-Medium'),
                 url('/assets/fonts/Montserrat-Medium.woff2') format('woff2'),
                 url('/assets/fonts/Montserrat-Medium.woff') format('woff');
          }
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            src: local('Montserrat Bold'), local('Montserrat-Bold'),
                 url('/assets/fonts/Montserrat-Bold.woff2') format('woff2'),
                 url('/assets/fonts/Montserrat-Bold.woff') format('woff');
          }
          
          body {overflow: visible !important;padding-right: 0px !important;}
      `,
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          padding: '0px !important',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: lightPalette.palette.text.primary,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          color: lightPalette.palette.text.primary,
          '& fieldset': {
            borderColor: lightPalette.palette.text.primary,
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
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 10,
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
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
      defaultProps: {
        variant: 'contained',
        size: 'large',
      },
    },
    MuiAppBar: {
      defaultProps: {
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          flexDirection: 'row',
          padding: 0,
          height: HEADER_HEIGHT,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '10px 0 !important',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          paddingRight: '0px !important',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          width: '100%',
          minHeight: 'inherit !important',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      },
    },
  },
})

export default theme
