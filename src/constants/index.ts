import {AvatarItems, GeneralOptionT} from 'src/types'

export const GENDER_OPTIONS: GeneralOptionT[] = [
  {value: 'f', title: 'Female'},
  {value: 'm', title: 'Male'},
]

export const AVATAR_ITEMS: GeneralOptionT[] = [
  {value: AvatarItems.LOGOUT, title: 'Logout'},
]

export const SNACKBAR_TIME: number = 2000
