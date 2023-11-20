/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useReducer, useRef, useState } from 'react'

import useInput from '@/hooks/useInput'
import { useAppDispatch } from '@/hooks/useRedux'
import {
  deleteTodoCreator,
  updateTodoCreator,
} from '@/store/slices/boardsSlice/actionCreator'
import { TodoProps } from '@/components/Todo/types'
import { useParams, useRouter } from 'next/navigation'

function useTodo({
  todo: { todoCompleted, todoValue, todoId },
  columnId,
}: Omit<TodoProps, 'index'>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const router = useRouter()

  const [isEditing, setIsEditing] = useState(false)
  const [isCompleted, onToggleIsCompleted] = useReducer(v => !v, todoCompleted)
  const { value, onChange } = useInput({ valueProp: todoValue })

  const onCompleted = useCallback(() => {
    onToggleIsCompleted()
    dispatch(
      updateTodoCreator({
        boardId: id as string,
        data: { todoCompleted: !isCompleted },
        todoId,
        columnId,
        router,
      })
    )
  }, [onToggleIsCompleted, dispatch, id, columnId, isCompleted, todoId])

  const onDelete = useCallback(() => {
    dispatch(
      deleteTodoCreator({ columnId, boardId: id as string, todoId, router })
    )
  }, [dispatch, columnId, todoId, id])

  const onSubmit = useCallback(() => {
    if (!value.length) {
      onDelete()
    } else {
      dispatch(
        updateTodoCreator({
          router,
          todoId,
          boardId: id as string,
          data: {
            todoValue: value,
          },
          columnId,
        })
      )
    }

    setIsEditing(false)
    inputRef.current?.blur()
  }, [value, onDelete, columnId, id, todoId, dispatch])

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
