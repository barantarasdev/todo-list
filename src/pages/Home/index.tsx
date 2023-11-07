import React from 'react'
import AddTodo from 'src/components/AddTodo'
import Header from 'src/components/Header'
import Todos from 'src/components/Todos'
import { StyledHome, StyledMain } from 'src/pages/Home/styles'

function Home() {
  return (
    <StyledHome>
      <Header />

      <StyledMain>
        <AddTodo />

        <Todos />
      </StyledMain>
    </StyledHome>
  )
}

export default Home
