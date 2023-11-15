import { Avatar, IconButton, Menu as MUIMenu } from '@mui/material'
import { Person } from '@mui/icons-material'

import MenuItem from '@/components/MenuItem'
import useMenu from '@/components/Menu/useMenu'
import { HEADER_HEIGHT, MENU_ITEMS } from '@/constants'

function Menu() {
  const { anchorElement, onClose, onOpen } = useMenu()

  return (
    <>
      <IconButton onClick={onOpen}>
        <Avatar>
          <Person />
        </Avatar>
      </IconButton>

      <MUIMenu
        style={{ marginTop: HEADER_HEIGHT }}
        anchorEl={anchorElement}
        open={Boolean(anchorElement)}
        onClose={onClose}
      >
        {MENU_ITEMS.map(option => (
          <MenuItem key={option.value} option={option} onClose={onClose} />
        ))}
      </MUIMenu>
    </>
  )
}

export default Menu
