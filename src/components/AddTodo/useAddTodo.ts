import { FormEvent, useCallback, useRef } from 'react'
import { AddTodoProps } from 'src/components/AddTodo/types'
import useInput from 'src/hooks/useInput'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { createTodoCreator } from 'src/store/slices/todosSlice/actionCreators'

function useAddTodo({ colId }: AddTodoProps) {
  const { value, onChange, onClear: onClearF } = useInput()
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()
  const { userId } = useAppSelector(state => state.user)

  const onClear = useCallback(() => {
    onClearF()
    inputRef.current?.focus()
  }, [inputRef, onClearF])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (value.length && userId) {
        const newTodo = {
          todoValue: value,
          todoCompleted: false,
          userId,
        }

        dispatch(createTodoCreator(colId, newTodo))
      }

      onClear()
    },
    [value, userId, dispatch, createTodoCreator, colId]
  )

  return { onSubmit, inputRef, value, onChange, onClear }
}

export default useAddTodo
