import { createTheme } from '@mui/material'

import lightPalette from '@/common/themes/lightPalette'
import { HEADER_HEIGHT, MAIN_BORDER_RADIUS, PRIMARY_PADDING } from '@/constants'

const {
  palette: { text, primary, secondary },
} = lightPalette

const theme = createTheme({
  ...lightPalette,
  spacing: 5,
  transitions: {
    duration: {
      standard: 200,
    },
  },
  mixins: {
    flexCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    positionCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    textEllipsis: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  typography: {
    allVariants: {
      fontSize: 20,
    },
    h1: {
      fontSize: 80,
      textAlign: 'center',
      fontWeight: 900,
    },
    h2: {
      fontSize: 80,
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
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
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
        input: {
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      },
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          gap: 15,
        },
        item: {
          width: 200,
          height: 100,
          backgroundColor: secondary.main,
          borderRadius: MAIN_BORDER_RADIUS,
          transition: 'box-shadow 0.3s',

          '&:hover': {
            boxShadow: 'rgba(255, 255, 255, 0.2) 0px 8px 24px',
          },
        },
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
    MuiModal: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: text.secondary,
          fontWeight: 700,
        },
        containedInfo: {
          color: text.primary,
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
