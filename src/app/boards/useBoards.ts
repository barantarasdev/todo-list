/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useCallback, useRef } from 'react'

import { createBoardCreator } from '@/store/slices/boardsSlice/actionCreator'
import useInput from '@/hooks/useInput'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { useRouter } from 'next/navigation'

function useBoards() {
  const dispatch = useAppDispatch()
  const boards = useAppSelector(state => state.columns.boards)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { value, onChange, onClear } = useInput({ inputRef })

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (value.length) {
        dispatch(createBoardCreator({ boardName: value, router }))
      }

      onClear()
    },
    [value, onClear, dispatch]
  )

  return { onSubmit, boards, inputRef, value, onChange, onClear }
}

export default useBoards
