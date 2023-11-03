import {PureComponent} from 'react'

import AddTodo from 'src/components/AddTodo'
import Header from 'src/components/Header'
import Todos from 'src/components/Todos'
import * as Styled from 'src/pages/Home/styles'

class Home extends PureComponent {
  render() {
    return (
      <Styled.Home>
        <Header />

        <Styled.Main>
          <AddTodo />

          <Todos />
        </Styled.Main>
      </Styled.Home>
    )
  }
}

export default Home
