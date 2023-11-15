'use client'

import Board from '@/components/Board'
import AddColumn from '@/components/AddColumn'
import WithPrivateRoute from '@/hocks/WithPrivateRoutes'
import StyledHome from '@/components/Home/styles'

function Main() {
  return (
    <StyledHome>
      <Board />

      <AddColumn />
    </StyledHome>
  )
}

export default WithPrivateRoute(Main)
