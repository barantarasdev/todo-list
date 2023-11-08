import { Alert, Snackbar as MUISnackbar } from '@mui/material'
import { createPortal } from 'react-dom'
import useSnackbar from 'src/components/Snackbar/useSnackbar'
import { SNACKBAR_TIME } from 'src/constants'

function Snackbar() {
  const { message, onClose } = useSnackbar()

  return createPortal(
    <MUISnackbar
      onClose={onClose}
      open={Boolean(message)}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={SNACKBAR_TIME}
    >
      <Alert severity="error">{message}</Alert>
    </MUISnackbar>,
    document.getElementById('snackbar') as HTMLElement
  )
}

export default Snackbar
