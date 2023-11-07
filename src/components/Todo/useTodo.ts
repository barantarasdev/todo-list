import { FormEvent, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { TodoProps } from 'src/components/Todo/types'
import useActive from 'src/hooks/useActive'
import useInput from 'src/hooks/useInput'
import {
  deleteTodoCreator,
  updateTodoCreator,
} from 'src/store/slices/todosSlice/actionCreators'

function useTodo({ todo: { todoCompleted, todoValue, todoId } }: TodoProps) {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const { value, onChange } = useInput(todoValue)
  const { isActive: isCompleted, toggleIsActive: onToggleIsCompleted } =
    useActive(todoCompleted)
  const { isActive: isEditing, toggleIsActive: onToggleEditing } = useActive()

  const onCompleted = useCallback(() => {
    dispatch(
      updateTodoCreator(todoId, {
        todoCompleted: !isCompleted,
        todoValue: value,
      })
    )
    onToggleIsCompleted()
  }, [
    onToggleIsCompleted,
    dispatch,
    updateTodoCreator,
    todoId,
    isCompleted,
    todoValue,
  ])

  const onFocus = useCallback(() => {
    if (!isCompleted) {
      onToggleEditing()
    }
  }, [isCompleted, onToggleEditing])

  const onDelete = useCallback(() => {
    dispatch(deleteTodoCreator(todoId))
  }, [dispatch, deleteTodoCreator, todoId])

  const onSubmit = useCallback(
    (e?: FormEvent<HTMLFormElement>) => {
      if (e) {
        e.preventDefault()
      }

      if (!value.length) {
        onDelete()
      } else {
        dispatch(
          updateTodoCreator(todoId, {
            todoValue: value,
            todoCompleted: false,
          })
        )
      }

      onToggleEditing()
      inputRef.current?.blur()
    },
    [
      value,
      onDelete,
      updateTodoCreator,
      todoId,
      dispatch,
      todoValue,
      todoCompleted,
      onToggleEditing,
      inputRef,
    ]
  )

  const onBlur = useCallback(() => {
    if (isEditing) {
      onSubmit()
    }
  }, [isEditing, onSubmit])

  const onClick = () => {
    onSubmit()
  }

  return {
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
  }
}

export default useTodo
