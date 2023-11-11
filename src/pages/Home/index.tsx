import AddColumn from 'src/components/AddColumn'
import Board from 'src/components/Board'
import Header from 'src/components/Header'
import {
  HomeTodosContainer,
  StyledHome,
  StyledMain,
} from 'src/pages/Home/styles'

function Home() {
  return (
    <StyledHome>
      <Header />

      <StyledMain>
        <HomeTodosContainer>
          <Board />

          <AddColumn />
        </HomeTodosContainer>
      </StyledMain>
    </StyledHome>
  )
}

export default Home
