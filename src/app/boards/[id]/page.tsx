'use client'

import { ArrowBack } from '@mui/icons-material'

import Board from '@/components/Board'
import Input from '@/components/common/Input'
import WithPrivateRoute from '@/hocks/WithPrivateRoutes'
import useBoard from '@/app/boards/[id]/useBoard'
import { Form, Section, Button } from '@/app/boards/[id]/styles'
import { FormButton } from '@/styles'

function BoardId() {
  const { onSubmit, onBack, inputRef, value, onChange, onClear } = useBoard()

  return (
    <Section>
      <Button onClick={onBack} startIcon={<ArrowBack />}>
        Back
      </Button>

      <Board />

      <Form onSubmit={onSubmit}>
        <Input
          inputRef={inputRef}
          value={value}
          onChange={onChange}
          onClear={onClear}
          helperText=""
          placeholder="Column name"
          isClear
        />

        <FormButton type="submit">Add new column</FormButton>
      </Form>
    </Section>
  )
}

export default WithPrivateRoute(BoardId)
