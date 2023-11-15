import { FormEvent, useCallback, useRef } from 'react'

import { createTodoCreator } from '@/store/slices/columnSlice/actionCreator'
import { useAppDispatch } from '@/hooks/useRedux'
import useInput from '@/hooks/useInput'
import { getDataFromLocalStorage } from '@/utils'
import { AddTodoProps } from '@/components/AddTodo/types'

function useAddTodo({ columnId }: AddTodoProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { value, onChange, onClear } = useInput({ inputRef })

  const dispatch = useAppDispatch()

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const { userId } = getDataFromLocalStorage('user')

      if (value.length && userId) {
        const todo = {
          todoValue: value,
          todoCompleted: false,
          userId,
        }

        dispatch(createTodoCreator({ columnId, todo }))
      }

      onClear()
    },
    [value, dispatch, columnId, onClear]
  )

  return { onSubmit, inputRef, value, onChange, onClear }
}

export default useAddTodo
