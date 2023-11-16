import { styled } from '@mui/material'
import Link from 'next/link'

export const Section = styled('section')(({ theme: { mixins, spacing } }) => ({
  gap: spacing(3),
  ...mixins.flexCenter,
}))

export const StyledLink = styled(Link)(({ theme: { mixins } }) => ({
  display: 'block',
  height: '100%',
  width: '100%',
  fontWeight: 700,
  fontSize: 40,
  color: 'inherit',
  textDecoration: 'none',
  ...mixins.flexCenter,
}))

export const Form = styled('form')({
  width: '40%',
  display: 'flex',
})
