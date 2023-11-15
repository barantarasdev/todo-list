import React, { useCallback, useReducer, useRef, useState } from 'react'

import useInput from '@/hooks/useInput'
import { useAppDispatch } from '@/hooks/useRedux'
import {
  deleteTodoCreator,
  updateTodoCreator,
} from '@/store/slices/columnSlice/actionCreator'
import { TodoProps } from '@/components/Todo/types'

function useTodo({
  todo: { todoCompleted, todoValue, todoId },
  columnId,
}: Omit<TodoProps, 'index'>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [isCompleted, onToggleIsCompleted] = useReducer(v => !v, todoCompleted)
  const { value, onChange } = useInput({ valueProp: todoValue })

  const onCompleted = useCallback(() => {
    onToggleIsCompleted()
    dispatch(
      updateTodoCreator({
        todo: { todoValue: value, todoCompleted: !isCompleted },
        todoId,
        columnId,
      })
    )
  }, [onToggleIsCompleted, dispatch, columnId, value, isCompleted, todoId])

  const onDelete = useCallback(() => {
    dispatch(deleteTodoCreator({ columnId, todoId }))
  }, [dispatch, columnId, todoId])

  const onSubmit = useCallback(() => {
    if (!value.length) {
      onDelete()
    } else {
      dispatch(
        updateTodoCreator({
          columnId,
          todoId,
          todo: {
            todoValue: value,
            todoCompleted: false,
          },
        })
      )
    }

    setIsEditing(false)
    inputRef.current?.blur()
  }, [value, onDelete, columnId, todoId, dispatch])

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
    isCompleted,
    isEditing,
    onChange,
    onDelete,
    onBlur,
    onCompleted,
    onSubmit,
    onDoubleClick,
    onKeyDown,
  }
}

export default useTodo
