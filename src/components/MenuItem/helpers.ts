import { LogoutCreator } from '@/store/slices/userSlice/actionCreator'
import { ProcessClickProps } from '@/components/MenuItem/types'
import { MenuItemsE } from '@/types'

function processClick({ value, dispatch, router }: ProcessClickProps) {
  switch (value) {
    case MenuItemsE.LOGOUT:
      dispatch(LogoutCreator({ router }))

      break
    default:
      break
  }
}

export default processClick
