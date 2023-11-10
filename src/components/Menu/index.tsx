import { Menu as MUIMenu } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { MenuProps } from 'src/components/Menu/types'

function Menu({ settings, anchorEl, onClick, onClose }: MenuProps) {
  return (
    <MUIMenu
      sx={{ mt: '45px' }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {settings.map(({ title, value }) => (
        <MenuItem key={value} onClick={() => onClick(value)}>
          <Typography>{title}</Typography>
        </MenuItem>
      ))}
    </MUIMenu>
  )
}

export default Menu
