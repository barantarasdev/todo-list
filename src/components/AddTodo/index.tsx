import useAddTodo from '@/components/AddTodo/useAddTodo'
import ActionInput from '@/components/common/ActionInput'
import { AddTodoProps } from '@/components/AddTodo/types'
import { Button, Form } from '@/components/AddTodo/styles'

function AddTodo({ columnId }: AddTodoProps) {
  const { onSubmit, inputRef, value, onChange, onClear } = useAddTodo({
    columnId,
  })

  return (
    <Form onSubmit={onSubmit}>
      <ActionInput
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        placeholder="New todo..."
        onClear={onClear}
      />

      <Button type="submit">Add</Button>
    </Form>
  )
}

export default AddTodo
