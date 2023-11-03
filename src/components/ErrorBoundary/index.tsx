import {Component, ContextType, PropsWithChildren} from 'react'
import PrimaryContext from 'src/context'
import {Routes} from 'src/types'

class ErrorBoundary extends Component<PropsWithChildren> {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  componentDidCatch(): void {
    const {setRoute} = this.context
    setRoute(Routes.SIGN_IN)
  }

  render() {
    const {children} = this.props

    return children
  }
}

export default ErrorBoundary
