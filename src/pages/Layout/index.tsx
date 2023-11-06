import { Component } from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router'
import SnackBar from 'src/components/Snackbar'
import { getDataFromLocalStorage } from 'src/helpers/storageHelper'
import withNavigation from 'src/hocks/withNavigation'
import ErrorBoundary from 'src/pages/ErrorBoundary'
import { LayoutProps } from 'src/pages/Layout/types'
import { mapDispatchToTodosProps } from 'src/store/slices/todosSlice/todoMap'
import { RootContent } from 'src/styles'
import GlobalStyle from 'src/styles/globalStyles'
import { RoutesPath } from 'src/types'

class Layout extends Component<LayoutProps> {
  componentDidMount() {
    const user = getDataFromLocalStorage('user')
    const { navigate, setTodos } = this.props
    const { HOME, SIGN_IN } = RoutesPath

    if (user) {
      setTodos(user.userId)

      return navigate(HOME)
    }

    return navigate(SIGN_IN)
  }

  render() {
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
}

export default withNavigation(connect(null, mapDispatchToTodosProps)(Layout))
