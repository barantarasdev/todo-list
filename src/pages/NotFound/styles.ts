import { Box, styled } from '@mui/material'
import Typography from '@mui/material/Typography'

export const StyledNotFound = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const NotFoundTitle = styled(Typography)`
  font-size: 60px;
  text-align: center;
`
