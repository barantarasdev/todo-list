import { Box, css, styled } from '@mui/material'

export const StyledHome = styled(Box)(
  ({ theme: { spacing } }) => css`
    min-height: inherit;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  `
)

export const StyledMain = styled('main')(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  `
)
