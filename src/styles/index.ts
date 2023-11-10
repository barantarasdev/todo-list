import styled from 'styled-components'

const RootContent = styled.div`
  min-height: 100vh;
  min-width: fit-content;
  padding: 20px;
  background-image: url('/assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default RootContent
