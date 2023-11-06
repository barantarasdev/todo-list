import clearIcon from 'src/../public/assets/icons/clear.svg'
import * as Styled from 'src/components/AddTodo/styles'
import useAddTodo from 'src/components/AddTodo/useAddTodo'

const AddTodo = () => {
  const { onSubmit, inputRef, value, onChange, onClear } = useAddTodo()

  return (
    <Styled.FormBlock>
      <Styled.Form onSubmit={onSubmit}>
        <Styled.InputBlock>
          <Styled.Input
            ref={inputRef}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="New todo..."
          />

          {!!value.length && (
            <Styled.IconButton type="button" onClick={onClear}>
              <img src={clearIcon} alt="clear icon" />
            </Styled.IconButton>
          )}
        </Styled.InputBlock>

        <Styled.Button type="submit">ADD</Styled.Button>
      </Styled.Form>
    </Styled.FormBlock>
  )
}

export default AddTodo
