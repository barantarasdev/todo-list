import React, { useCallback, useRef, useState } from 'react'
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

  const [isEditing, setIsEditing] = useState(false)
  const { value, onChange } = useInput(todoValue)
  const { isActive: isCompleted, toggleIsActive: onToggleIsCompleted } =
    useActive(todoCompleted)
  // const { isActive: isEditing, toggleIsActive: onToggleEditing } = useActive()

  const onCompleted = useCallback(() => {
    onToggleIsCompleted()
    dispatch(
      updateTodoCreator(todoId, {
        todoCompleted: !isCompleted,
        todoValue: value,
      })
    )
  }, [
    onToggleIsCompleted,
    dispatch,
    updateTodoCreator,
    todoId,
    isCompleted,
    value,
  ])

  const onDelete = useCallback(() => {
    dispatch(deleteTodoCreator(todoId))
  }, [dispatch, deleteTodoCreator, todoId])

  const onSubmit = useCallback(() => {
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

    setIsEditing(false)
    inputRef.current?.blur()
  }, [
    isEditing,
    value,
    onDelete,
    updateTodoCreator,
    todoId,
    dispatch,
    setIsEditing,
    inputRef,
  ])

  const onDoubleClick = useCallback(() => {
    if (!isCompleted) {
      setIsEditing(true)
      inputRef.current?.focus()
    }
  }, [isCompleted, inputRef, setIsEditing])

  const onBlur = useCallback(() => {
    if (isEditing) {
      onSubmit()
    }
  }, [isEditing, onSubmit])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        onBlur()
      }
    },
    [onBlur]
  )

  return {
    value,
    inputRef,
    onKeyDown,
    isCompleted,
    isEditing,
    onChange,
    onDoubleClick,
    onDelete,
    onBlur,
    onCompleted,
    onSubmit,
  }
}

export default useTodo
