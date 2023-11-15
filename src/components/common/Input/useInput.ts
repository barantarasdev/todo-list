'use client'

import { useReducer } from 'react'

function useInput() {
  const [showPassword, toggleShowPassword] = useReducer(v => !v, false)

  return { showPassword, toggleShowPassword }
}

export default useInput
