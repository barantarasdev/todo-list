import { Typography, styled } from '@mui/material'

const Title = styled(Typography)(({ theme: { mixins } }) => ({
  ...mixins.positionCenter,
}))

export default Title
