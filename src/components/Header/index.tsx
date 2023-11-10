import { Avatar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import StyledToolbar from 'src/components/Header/styles'
import useHeader from 'src/components/Header/useHeader'
import Menu from 'src/components/Menu'

const settings = [{ value: 'logout', title: 'Logout' }]

function Header() {
  const { onOpen, onClick, anchorEl, onClose } = useHeader()

  return (
    <AppBar>
      <Container>
        <StyledToolbar>
          <Typography variant="h5">TodoList</Typography>

          <Box>
            <Tooltip title="Settings">
              <IconButton onClick={onOpen}>
                <Avatar src="/assets/icons/user.svg" alt="icon" />
              </IconButton>
            </Tooltip>

            <Menu
              onClick={onClick}
              anchorEl={anchorEl}
              onClose={onClose}
              settings={settings}
            />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

export default Header
