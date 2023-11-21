import { styled } from '@mui/material'
import Link from 'next/link'

export const Section = styled('section')(({ theme: { mixins, spacing } }) => ({
  gap: spacing(3),
  ...mixins.flexCenter,
}))

export const StyledLink = styled(Link)(({ theme: { mixins, spacing } }) => ({
  display: 'block',
  height: '100%',
  width: '100%',
  padding: spacing(2),
  fontWeight: 700,
  fontSize: 35,
  textAlign: 'center',
  color: 'inherit',
  textDecoration: 'none',
  ...mixins.textEllipsis,
}))

export const Form = styled('form')({
  width: '40%',
  display: 'flex',
})
