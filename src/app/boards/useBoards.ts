import { FormEvent, useCallback, useRef } from 'react'

import { createBoardCreator } from '@/store/slices/columnSlice/actionCreator'
import useInput from '@/hooks/useInput'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'

function useBoards() {
  const dispatch = useAppDispatch()
  const boards = useAppSelector(state => state.columns.boards)
  const { userId } = useAppSelector(state => state.user)
  const inputRef = useRef<HTMLInputElement>(null)
  const { value, onChange, onClear } = useInput({ inputRef })

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (value.length && userId) {
        dispatch(createBoardCreator({ boardName: value, userId }))
      }

      onClear()
    },
    [value, onClear, userId, dispatch]
  )

  return { onSubmit, boards, inputRef, value, onChange, onClear }
}

export default useBoards
