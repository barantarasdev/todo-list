import { css, styled } from '@mui/material'

const StyledHome = styled('section')(
  ({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing(3)};
  `
)

export default StyledHome
