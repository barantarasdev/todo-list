import { Dispatch } from 'redux'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { MenuItemsE, OptionT } from '@/types'

export type MenuItemProps = {
  option: OptionT<MenuItemsE>
  onClose: () => void
}

export type ProcessClickProps = {
  value: MenuItemsE
  dispatch: Dispatch
  router: AppRouterInstance
}
