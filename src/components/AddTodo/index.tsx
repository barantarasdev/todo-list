import clearIcon from 'src/../public/assets/icons/clear.svg'
import {
  AddTodoButton,
  AddTodoForm,
  AddTodoFormBlock,
  AddTodoIconButton,
  AddTodoInput,
  AddTodoInputBlock,
} from 'src/components/AddTodo/styles'
import useAddTodo from 'src/components/AddTodo/useAddTodo'

function AddTodo() {
  const { onSubmit, inputRef, value, onChange, onClear } = useAddTodo()

  return (
    <AddTodoFormBlock>
      <AddTodoForm onSubmit={onSubmit}>
        <AddTodoInputBlock>
          <AddTodoInput
            ref={inputRef}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="New todo..."
          />

          {!!value.length && (
            <AddTodoIconButton type="button" onClick={onClear}>
              <img src={clearIcon} alt="clear icon" />
            </AddTodoIconButton>
          )}
        </AddTodoInputBlock>

        <AddTodoButton type="submit">ADD</AddTodoButton>
      </AddTodoForm>
    </AddTodoFormBlock>
  )
}

export default AddTodo
