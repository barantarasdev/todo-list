import {Component, PropsWithChildren} from 'react'
import withNavigation from 'src/hocks/withNavigation'
import {NavigateT, Routes} from 'src/types'

class ErrorBoundary extends Component<PropsWithChildren & NavigateT> {
  componentDidCatch(): void {
    const {navigate} = this.props

    navigate(Routes.SIGN_IN)
  }

  render() {
    const {children} = this.props

    return children
  }
}

export default withNavigation(ErrorBoundary)
