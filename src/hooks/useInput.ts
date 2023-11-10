import { ChangeEvent, useCallback, useState } from 'react'

function useInput(valueProp = '') {
  const [value, setValue] = useState(valueProp)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const onClear = useCallback(() => {
    setValue('')
  }, [setValue])

  return { value, onChange, onClear }
}

export default useInput
