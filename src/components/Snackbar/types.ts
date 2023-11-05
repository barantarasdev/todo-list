export type SnackbarStatesT = {
  isActive: boolean
}

export type SnackbarProps = {
  snackbar: string
  setSnackbar: (message: string) => void
}
