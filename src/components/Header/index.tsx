import { Avatar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { StyledIconButton, StyledToolbar } from 'src/components/Header/styles'
import useHeader from 'src/components/Header/useHeader'
import Menu from 'src/components/Menu'
import { SETTINGS } from 'src/constants'

function Header() {
  const { onOpen, onClick, anchorEl, onClose } = useHeader()

  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant="h5">TodoList</Typography>

        <Box>
          <Tooltip title="Settings">
            <StyledIconButton onClick={onOpen}>
              <Avatar src="/assets/icons/user.svg" alt="icon" />
            </StyledIconButton>
          </Tooltip>

          <Menu
            onClick={onClick}
            anchorEl={anchorEl}
            onClose={onClose}
            settings={SETTINGS}
          />
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
