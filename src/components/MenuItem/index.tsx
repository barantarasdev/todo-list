import { MenuItem as MUIMenuItem, Typography } from '@mui/material'

import useMenuItem from '@/components/MenuItem/useMenuItem'
import { MenuItemProps } from '@/components/MenuItem/types'

function MenuItem({ option, onClose }: MenuItemProps) {
  const { onClick } = useMenuItem({ onClose, option })

  return (
    <MUIMenuItem onClick={onClick}>
      <Typography>{option.name}</Typography>
    </MUIMenuItem>
  )
}

export default MenuItem
