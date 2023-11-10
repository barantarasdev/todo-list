import { Link } from 'react-router-dom'
import { NotFoundTitle, StyledNotFound } from 'src/pages/NotFound/styles'
import { RoutesPath } from 'src/types'

function NotFound() {
  return (
    <StyledNotFound>
      <NotFoundTitle>Page not found</NotFoundTitle>
      <Link to={RoutesPath.HOME}>Go to home</Link>
    </StyledNotFound>
  )
}

export default NotFound
