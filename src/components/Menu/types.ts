import { GeneralOptionT } from 'src/types'

export type MenuProps = {
  settings: GeneralOptionT[]
  anchorEl: HTMLElement | null
  onClose: () => void
  onClick: (value: string) => void
}
