import { FormEvent, useCallback, useRef } from 'react'

import { createColumnCreator } from '@/store/slices/columnSlice/actionCreator'
import { useAppDispatch } from '@/hooks/useRedux'
import useInput from '@/hooks/useInput'

function useAddColumn() {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const { value: columnName, onChange, onClear } = useInput({ inputRef })

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (columnName.length) {
        dispatch(createColumnCreator({ columnName }))
      }

      onClear()
    },
    [onClear, dispatch, columnName]
  )

  return { value: columnName, onChange, onClear, onSubmit, inputRef }
}

export default useAddColumn
