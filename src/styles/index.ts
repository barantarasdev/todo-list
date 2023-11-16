'use client'

import { Button, styled } from '@mui/material'

import { HEADER_HEIGHT, PRIMARY_PADDING } from '@/constants'
import Link from 'next/link'

export const AuthFormBlock = styled('section')(
  ({ theme: { spacing, mixins } }) => ({
    width: '100%',
    minHeight: '100%',
    paddingBottom: 'inherit',
    gap: spacing(2),
    ...mixins.flexCenter,
  })
)

export const AuthForm = styled('form')(({ theme: { spacing, mixins } }) => ({
  gap: spacing(1),
  ...mixins.flexCenter,
}))

export const MainSection = styled('section')(
  ({ theme: { spacing, mixins } }) => ({
    height: '100%',
    width: '100%',
    gap: spacing(4),
    ...mixins.flexCenter,
  })
)

export const Main = styled('main')({
  height: '100%',
  minWidth: 'fit-content',
  padding: `${HEADER_HEIGHT + PRIMARY_PADDING}px ${PRIMARY_PADDING}px
    ${PRIMARY_PADDING}px`,
  position: 'relative',
})

export const StyledLink = styled(Link)(({ theme: { palette } }) => ({
  fontSize: 23,
  fontWeight: 700,
  color: palette.text.primary,
}))

export const FormButton = styled(Button)({
  borderRadius: 0,
})
