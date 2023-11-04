import React, {Component} from 'react'
import {createPortal} from 'react-dom'
import {connect} from 'react-redux'

import StyledSnackbar from 'src/components/Snackbar/styles'
import {SnackbarProps, SnackbarStatesT} from 'src/components/Snackbar/types'
import {SNACKBAR_TIME} from 'src/constants'
import {
  mapDispatchToSnackbarProps,
  mapStateToSnackbarProps,
} from 'src/store/slices/snackbarSlice/snackbarMap'

class SnackBar extends Component<SnackbarProps, SnackbarStatesT> {
  private timeoutId: number | null

  constructor(props: SnackbarProps) {
    super(props)

    this.state = {isActive: false}
    this.timeoutId = null
  }

  componentDidUpdate(prevProps: SnackbarProps) {
    const {snackbar, setSnackbar} = this.props

    if (snackbar && snackbar !== prevProps.snackbar) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }

      this.setState({isActive: true})

      this.timeoutId = window.setTimeout(() => {
        this.setState({isActive: false})

        setSnackbar('')
      }, SNACKBAR_TIME)
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const {isActive} = this.state
    const {snackbar} = this.props

    if (!isActive) {
      return null
    }

    return createPortal(
      <StyledSnackbar>{snackbar}</StyledSnackbar>,
      document.getElementById('snackbar') as HTMLElement
    )
  }
}

export default connect(
  mapStateToSnackbarProps,
  mapDispatchToSnackbarProps
)(SnackBar)
