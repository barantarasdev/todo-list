import * as Styled from 'src/pages/NotFound/styles'
import { AnimatedLink } from 'src/styles'
import { RoutesPath } from 'src/types'

const NotFound = () => (
  <Styled.NotFound>
    <Styled.Title>Page not found</Styled.Title>
    <AnimatedLink to={RoutesPath.HOME}>Go to home</AnimatedLink>
  </Styled.NotFound>
)

export default NotFound
