import { useMemo } from 'react'
import { UseInputProps } from 'src/components/common/Input/types'
import useActive from 'src/hooks/useActive'

function useInput({ value, isPassword, name, errors }: UseInputProps) {
  const { isActive: isFocused, toggleIsActive: toggleIsFocused } = useActive()
  const {
    isActive: isVisiblePassword,
    toggleIsActive: toggleIsVisiblePassword,
  } = useActive()

  const isActive = useMemo(() => isFocused || !!value, [isFocused, value])
  const isInputError = useMemo(() => errors && !!errors[name], [errors, name])
  const isEyeButton = useMemo(
    () => isPassword && !!String(value).length,
    [isPassword, value]
  )

  return {
    isVisiblePassword,
    toggleIsFocused,
    toggleIsVisiblePassword,
    isInputError,
    isActive,
    isEyeButton,
  }
}

export default useInput
