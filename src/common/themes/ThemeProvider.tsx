import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'
import { ReactNode } from 'react'
import theme from 'src/common/themes/themes'

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
