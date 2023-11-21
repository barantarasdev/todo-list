'use client'

import { Alert, Snackbar as MUISnackbar } from '@mui/material'

import useSnackbar from '@/components/common/Snackbar/useSnackbar'
import { SNACKBAR_TIME } from '@/constants'

function Snackbar() {
  const { message, onClose } = useSnackbar()

  return (
    <MUISnackbar
      onClose={onClose}
      open={Boolean(message)}
      autoHideDuration={SNACKBAR_TIME}
    >
      <Alert>{message}</Alert>
    </MUISnackbar>
  )
}

export default Snackbar
