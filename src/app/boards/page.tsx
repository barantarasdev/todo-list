'use client'

import { Grid } from '@mui/material'

import Input from '@/components/common/Input'
import WithPrivateRoute from '@/hocks/WithPrivateRoutes'
import useBoards from '@/app/boards/useBoards'
import { RoutesE } from '@/types'
import { StyledLink, Form, Section } from '@/app/boards/styles'
import { FormButton } from '@/styles'
import Empty from '@/components/Empty'

function Boards() {
  const { onSubmit, boards, inputRef, value, onChange, onClear } = useBoards()

  return (
    <Section>
      <Form onSubmit={onSubmit}>
        <Input
          inputRef={inputRef}
          value={value}
          onChange={onChange}
          placeholder="New board..."
          helperText=""
          onClear={onClear}
          isClear
        />

        <FormButton type="submit">Add</FormButton>
      </Form>

      {!boards.length && <Empty name="Boards is empty!" />}

      <Grid container>
        {boards.map(({ boardId, boardName }) => (
          <Grid key={boardId} item>
            <StyledLink href={`${RoutesE.BOARDS}/${boardId}`}>
              {boardName}
            </StyledLink>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export default WithPrivateRoute(Boards)
