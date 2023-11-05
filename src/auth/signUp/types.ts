import {NavigateT, UserT} from 'src/types'

export type SignUpStatesT = {
  formData: UserT
  errors: Record<string, string>
  isSubmitted: boolean
}

export type SignUpProps = {
  setSnackbar: (message: string) => void
} & NavigateT
