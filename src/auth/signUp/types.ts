import { NavigateFunction } from 'react-router'
import { NavigateT, UserT } from 'src/types'

export type SignUpStatesT = {
  formData: UserT
  errors: Record<string, string>
  isSubmitted: boolean
}

export type SignUpProps = {
  signUp: (data: any, navigate: NavigateFunction) => void
} & NavigateT
