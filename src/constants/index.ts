import { GeneralOptionT } from 'src/types'

export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const PHONE_PATTERN =
  /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
export const SITE_PATTERN =
  /^(https?:\/\/)?(?!www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
export const PASSWORD_PATTERN =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/

export const GENDER_OPTIONS: GeneralOptionT[] = [
  { value: 'f', title: 'Female' },
  { value: 'm', title: 'Male' },
]

export const SNACKBAR_TIME: number = 3000

export const HEADER_HEIGHT: number = 50

export const SETTINGS: GeneralOptionT[] = [{ value: 'logout', title: 'Logout' }]
