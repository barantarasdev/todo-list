import {square} from 'src/styles/mixins'
import styled, {keyframes} from 'styled-components'

const ldsDualRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: ' ';
    display: block;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--color-white);
    border-color: #fff transparent var(--color-white) transparent;
    animation: ${ldsDualRingAnimation} 1.2s linear infinite;
    ${square('64px')}
  }

  ${square('80px')}
`

export default Spinner
