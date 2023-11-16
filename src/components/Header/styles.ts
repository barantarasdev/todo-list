import { Box, styled } from '@mui/material'
import Link from 'next/link'

export const Logo = styled(Link)(({ theme: { palette } }) => ({
  fontSize: 25,
  fontWeight: 700,
  color: palette.text.secondary,
  textDecoration: 'none',
}))

export const Form = styled('form')(({ theme: { spacing, mixins } }) => ({
  width: 300,
  gap: spacing(3),
  ...mixins.flexCenter,
  ...mixins.positionCenter,
}))

export const Actions = styled(Box)(({ theme: { spacing } }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(3),
}))
