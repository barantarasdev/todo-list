/* eslint-disable react-hooks/exhaustive-deps */

import { FormEvent, useCallback, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'

import useInput from '@/hooks/useInput'
import { useAppDispatch } from '@/hooks/useRedux'
import {
  createColumnCreator,
  setColumnsCreator,
} from '@/store/slices/boardsSlice/actionCreator'

function useBoard() {
  const router = useRouter()
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const { value: columnName, onChange, onClear } = useInput({ inputRef })

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (columnName.length) {
        dispatch(
          createColumnCreator({ columnName, boardId: id as string, router })
        )
      }

      onClear()
    },
    [onClear, dispatch, columnName, id]
  )

  const onBack = useCallback(() => {
    router.back()
  }, [])

  useEffect(() => {
    dispatch(setColumnsCreator({ boardId: id as string, router }))
  }, [dispatch, id])

  return { value: columnName, onChange, onClear, onSubmit, inputRef, onBack }
}

export default useBoard
