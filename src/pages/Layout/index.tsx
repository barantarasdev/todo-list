import {Component} from 'react'
import {connect} from 'react-redux'
import {Outlet} from 'react-router'

import SnackBar from 'src/components/Snackbar'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import withNavigation from 'src/hocks/withNavigation'
import ErrorBoundary from 'src/pages/ErrorBoundary'
import {LayoutProps} from 'src/pages/Layout/types'
import {mapDispatchToTodosProps} from 'src/store/slices/todosSlice/TodoMap'
import {RootContent} from 'src/styles'
import GlobalStyle from 'src/styles/globalStyles'
import {Routes} from 'src/types'

class Layout extends Component<LayoutProps> {
  async componentDidMount() {
    const user = getDataFromLocalStorage('user')
    const {navigate, setTodos} = this.props

    if (user) {
      setTodos(user.user_id)

      return navigate(Routes.HOME)
    }

    return navigate(Routes.SIGN_IN)
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

export default connect(null, mapDispatchToTodosProps)(withNavigation(Layout))
