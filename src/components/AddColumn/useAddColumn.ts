import React, { ChangeEvent, useCallback, useState } from 'react'
import { useAppDispatch } from 'src/hooks/useRedux'
import { createColsCreator } from 'src/store/slices/todosSlice/actionCreators'

function useAddColumn() {
  const dispatch = useAppDispatch()

  const [value, setValue] = useState('')

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const onSubmit = useCallback(() => {
    if (value.length) {
      dispatch(createColsCreator(value))
      setValue('')
    }
  }, [createColsCreator, setValue, value, dispatch])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSubmit()
      }
    },
    [setValue, onSubmit]
  )

  return { value, onChange, onKeyDown, onSubmit }
}

export default useAddColumn
