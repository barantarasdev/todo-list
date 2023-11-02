import { Component } from 'react'
import { PrimaryContext } from 'src/context'
import { ROUTES } from 'src/constants'

class ErrorBoundary extends Component {
  static contextType = PrimaryContext

  componentDidCatch(error, errorInfo) {
    this.context.setRoute(ROUTES.SIGN_IN)
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary
