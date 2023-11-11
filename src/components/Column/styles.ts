import { List, css, styled } from '@mui/material'

const StyledList = styled(List)(
  ({ theme: { spacing } }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  `
)

export default StyledList
