import { Outlet } from 'react-router'
import SnackBar from 'src/components/Snackbar'
import ErrorBoundary from 'src/pages/ErrorBoundary'
import useLayout from 'src/pages/Layout/useLayout'
import { RootContent } from 'src/styles'
import GlobalStyle from 'src/styles/globalStyles'

const Layout = () => {
  useLayout()

  return (
    <ErrorBoundary>
      <GlobalStyle />
      <RootContent>
        <Outlet />

        <SnackBar />
      </RootContent>
    </ErrorBoundary>
  )
}

export default Layout
