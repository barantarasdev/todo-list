import { Component } from 'react'
import { createPortal } from 'react-dom'

import { PrimaryContext } from 'src/context'
import { SNACKBAR_TIME } from 'src/components/Snackbar/constants'

class SnackBar extends Component {
  static contextType = PrimaryContext

  constructor(props) {
    super(props)

    this.state = { isActive: false, message: '' }
    this.timeoutId = null
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.context.snackbar !== prevState.message || !prevState.isActive) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }

      this.setState({
        isActive: true,
        message: this.context.snackbar,
      })

      this.timeoutId = setTimeout(() => {
        this.setState({ isActive: false })
      }, SNACKBAR_TIME)
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    if (!this.state.isActive) {
      return null
    }

    return createPortal(
      <div>{this.state.message}</div>,
      document.getElementById('snackbar'),
    )
  }
}

export default SnackBar
