import confirmIcon from 'src/../public/assets/icons/confirm.svg'
import removeIcon from 'src/../public/assets/icons/remove.svg'
import {
  TodoButton,
  TodoForm,
  TodoInput,
  TodoItem,
  TodoRemoveButton,
} from 'src/components/Todo/styles'
import { TodoProps } from 'src/components/Todo/types'
import useTodo from 'src/components/Todo/useTodo'
import Checkbox from 'src/components/common/Checkbox'

function Todo({ todo }: TodoProps) {
  const {
    value,
    inputRef,
    isCompleted,
    isEditing,
    onChange,
    onDelete,
    onBlur,
    onFocus,
    onCompleted,
    onSubmit,
    onClick,
  } = useTodo({ todo })

  return (
    <TodoItem $isFocused={isEditing} $isCompleted={isCompleted}>
      <Checkbox value={isCompleted} onChange={onCompleted} />

      <TodoForm onSubmit={onSubmit}>
        <TodoInput
          $isCompleted={isCompleted}
          type="text"
          value={value}
          ref={inputRef}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={!isEditing}
        />

        {isEditing && (
          <TodoButton type="submit" onClick={onClick}>
            <img src={confirmIcon} alt="icon confirm" />
          </TodoButton>
        )}
      </TodoForm>

      <TodoRemoveButton type="button" onClick={onDelete}>
        <img src={removeIcon} alt="icon remove" />
      </TodoRemoveButton>
    </TodoItem>
  )
}

export default Todo
