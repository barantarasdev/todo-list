import { Theme, createTheme, responsiveFontSizes } from '@mui/material/styles'

const lightPalette: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fee55d',
      light: '#bcbcbc',
    },
    secondary: {
      main: '#cbc2a8',
    },
    text: {
      primary: '#ffffff',
      secondary: '#173646',
      disabled: 'gray',
    },
    background: {
      paper: '#173646',
    },
  },
})

export default responsiveFontSizes(lightPalette)
