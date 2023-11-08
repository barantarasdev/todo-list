import { Outlet } from 'react-router'
import ThemeProvider from 'src/common/themes/ThemeProvider'
import SnackBar from 'src/components/Snackbar'
import ErrorBoundary from 'src/pages/ErrorBoundary'
import useLayout from 'src/pages/Layout/useLayout'
import RootContent from 'src/styles'

function Layout() {
  useLayout()

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <RootContent>
          <Outlet />

          <SnackBar />
        </RootContent>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default Layout
