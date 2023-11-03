import {TransitionGroup} from 'react-transition-group'
import styled from 'styled-components'

export const StyledTransitionGroup = styled(TransitionGroup)`
  display: flex;
  flex-direction: column;
  gap: var(--primary-gap);
`

export default TransitionGroup
