import { styled } from '@mui/material'

const Section = styled('section')(({ theme: { mixins } }) => ({
  ...mixins.positionCenter,
}))

export default Section
