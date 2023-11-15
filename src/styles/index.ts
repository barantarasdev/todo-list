'use client'

import { CircularProgress, css, styled } from '@mui/material'
import Link from 'next/link'

export const AuthFormBlock = styled('section')(
  ({ theme: { spacing } }) => css`
    width: 100%;
    min-height: 100%;
    padding-bottom: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing(2)};
  `
)

export const AuthForm = styled('form')(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing(1)};
  `
)

export const AuthLink = styled(Link)(
  ({ theme: { palette } }) => css`
    font-weight: 700;
    color: ${palette.text.primary};
  `
)

export const MainSection = styled('section')(
  ({ theme: { spacing } }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing(4)};
  `
)

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
