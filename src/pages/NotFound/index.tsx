import {PureComponent} from 'react'
import * as Styled from 'src/pages/NotFound/styles'
import {AnimatedLink} from 'src/styles'
import {RoutesPath} from 'src/types'

class Home extends PureComponent {
  render() {
    return (
      <Styled.NotFound>
        <Styled.Title>Page not found</Styled.Title>
        <AnimatedLink to={RoutesPath.HOME}>Go to home</AnimatedLink>
      </Styled.NotFound>
    )
  }
}

export default Home
