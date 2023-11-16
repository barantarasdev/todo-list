import { Theme, createTheme, responsiveFontSizes } from '@mui/material/styles'

const lightPalette: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fee146',
      light: '#ffffff',
    },
    secondary: {
      main: '#8B4000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#173646',
    },
    background: {
      paper: '#173646',
    },
  },
})

export default responsiveFontSizes(lightPalette)
