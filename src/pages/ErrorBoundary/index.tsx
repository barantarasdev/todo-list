import {Component, PropsWithChildren} from 'react'
import withNavigation from 'src/hocks/withNavigation'
import {NavigateT, RoutesPath} from 'src/types'

class ErrorBoundary extends Component<PropsWithChildren & NavigateT> {
  componentDidCatch() {
    const {navigate} = this.props

    navigate(RoutesPath.SIGN_IN)
  }

  render() {
    const {children} = this.props

    return children
  }
}

export default withNavigation(ErrorBoundary)
