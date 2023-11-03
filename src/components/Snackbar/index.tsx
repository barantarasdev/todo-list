import {Component, ContextType} from 'react'
import {createPortal} from 'react-dom'

import {SnackbarStatesT} from 'src/components/Snackbar/types'
import {SNACKBAR_TIME} from 'src/constants'
import PrimaryContext from 'src/context'

class SnackBar extends Component<{}, SnackbarStatesT> {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  private timeoutId: NodeJS.Timeout | null

  constructor(props: {}) {
    super(props)

    this.state = {isActive: false, message: ''}
    this.timeoutId = null
  }

  componentDidUpdate(_: {}, prevState: SnackbarStatesT) {
    const {snackbar} = this.context
    if (snackbar !== prevState.message || !prevState.isActive) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }

      this.setState({
        isActive: true,
        message: snackbar,
      })

      this.timeoutId = setTimeout(() => {
        this.setState({isActive: false})
      }, SNACKBAR_TIME)
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const {isActive, message} = this.state

    if (isActive) {
      return null
    }

    return createPortal(
      <div>{message}</div>,
      document.getElementById('snackbar') as HTMLElement
    )
  }
}

export default SnackBar
