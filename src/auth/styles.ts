import { Box, css, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const AuthFormBlock = styled(Box)(
  ({ theme: { spacing } }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing(2)};
  `
)

export const AuthForm = styled('form')(
  ({ theme: { spacing } }) => css`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing(1)};
  `
)

export const AuthLink = styled(Link)(
  ({ theme: { palette } }) => css`
    font-size: 20px;
    font-weight: 700;
    color: ${palette.text.primary};
  `
)
