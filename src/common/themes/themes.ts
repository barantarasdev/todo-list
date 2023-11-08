import { createTheme } from '@mui/material'
import lightPalette from 'src/common/themes/lightPalette'

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
        .item-enter {
          opacity: 0;
         }

         .item-enter-active {
            opacity: 1;
            transition: opacity 0.3s;
          }

          .item-exit {
            opacity: 1;
          }

          .item-exit-active {
            opacity: 0;
            transition: opacity var(--primary-duration) ease-in;
          }
  
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
      `,
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
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
        position: 'static',
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
  },
})

export default theme
