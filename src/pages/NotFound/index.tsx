import { NotFoundTitle, StyledNotFound } from 'src/pages/NotFound/styles'
import { AnimatedLink } from 'src/styles'
import { RoutesPath } from 'src/types'

function NotFound() {
  return (
    <StyledNotFound>
      <NotFoundTitle>Page not found</NotFoundTitle>
      <AnimatedLink to={RoutesPath.HOME}>Go to home</AnimatedLink>
    </StyledNotFound>
  )
}

export default NotFound
