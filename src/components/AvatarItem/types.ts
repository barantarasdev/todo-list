import { NavigateFunction } from 'react-router'
import { GeneralOptionT, NavigateT } from 'src/types'

export type AvatarItemProps = {
  item: GeneralOptionT
  logout: (navigate: NavigateFunction) => void
} & NavigateT
