import { GendersT, MenuItemsE, OptionT, RoutesE } from '@/types'

export const MENU_ITEMS: OptionT<MenuItemsE>[] = [
  { value: MenuItemsE.LOGOUT, name: 'Logout' },
]

export const NAVIGATION_ITEMS = [
  { href: RoutesE.HOME, name: 'Home' },
  { href: RoutesE.BOARDS, name: 'Boards' },
]

export const GENDER_OPTIONS: OptionT<GendersT>[] = [
  { value: 'f', name: 'Female' },
  { value: 'm', name: 'Male' },
]

export const MAIN_BORDER_RADIUS = 15

export const HEADER_HEIGHT: number = 60

export const PRIMARY_PADDING: number = 20

export const EMAIL_PATTERN: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const PHONE_PATTERN: RegExp =
  /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

export const SITE_PATTERN: RegExp =
  /^(https?:\/\/)?(?!www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

export const PASSWORD_PATTERN: RegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/

export const SNACKBAR_TIME: number = 3000

export const REQUIRED_FIELD = 'is required'

export const NOT_VALID_FIELD = 'is not valid'

export const AUTH_PATH = '/auth'
