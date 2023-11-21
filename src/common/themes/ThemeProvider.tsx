'use client'

import { ReactNode } from 'react'
import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'

import theme from '@/common/themes'

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
