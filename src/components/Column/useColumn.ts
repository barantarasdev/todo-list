import { FormEvent, useCallback, useRef } from 'react'

import { createTodoCreator } from '@/store/slices/columnSlice/actionCreator'
import { useAppDispatch } from '@/hooks/useRedux'
import useInput from '@/hooks/useInput'
import { UseColumnProps } from '@/components/Column/types'

function useColumn({ columnId, boardId }: UseColumnProps) {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const { value, onChange, onClear } = useInput({ inputRef })

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (value.length) {
        const todo = {
          todoValue: value,
          todoCompleted: false,
          boardId,
          columnId,
        }

        dispatch(createTodoCreator({ todo }))
      }

      onClear()
    },
    [value, dispatch, columnId, onClear, boardId]
  )

  return { onSubmit, inputRef, value, onChange, onClear }
}

export default useColumn
