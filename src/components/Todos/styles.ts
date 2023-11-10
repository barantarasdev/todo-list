import { css, styled } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'

const StyledTransitionGroup = styled(TransitionGroup)(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  `
)

export default StyledTransitionGroup
