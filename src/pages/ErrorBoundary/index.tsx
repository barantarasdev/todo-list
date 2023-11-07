import { Component } from 'react'
import { connect } from 'react-redux'
import withNavigation from 'src/hocks/withNavigation'
import { ErrorBoundaryProps } from 'src/pages/ErrorBoundary/types'
import mapDispatchToUserProps from 'src/store/slices/userSlice/userMap'

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  componentDidCatch() {
    const { logout, navigate } = this.props

    logout(navigate)
  }

  render() {
    const { children } = this.props

    return children
  }
}

export default withNavigation(
  connect(null, mapDispatchToUserProps)(ErrorBoundary)
)
