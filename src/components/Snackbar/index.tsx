import React from 'react'
import { createPortal } from 'react-dom'
import StyledSnackbar from 'src/components/Snackbar/styles'
import useSnackbar from 'src/components/Snackbar/useSnackbar'

function Snackbar() {
  const { isActive, snackbar } = useSnackbar()

  if (!isActive) {
    return null
  }

  return createPortal(
    <StyledSnackbar>{snackbar}</StyledSnackbar>,
    document.getElementById('snackbar') as HTMLElement
  )
}

export default Snackbar
