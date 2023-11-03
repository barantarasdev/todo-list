import {User} from 'src/types'

export type SignUpStatesT = {
  formData: User
  errors: Record<string, string>
}
