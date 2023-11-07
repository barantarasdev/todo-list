import AddTodo from 'src/components/AddTodo'
import Header from 'src/components/Header'
import Todos from 'src/components/Todos'
import * as Styled from 'src/pages/Home/styles'

const Home = () => (
  <Styled.Home>
    <Header />

    <Styled.Main>
      <AddTodo />

      <Todos />
    </Styled.Main>
  </Styled.Home>
)

export default Home
