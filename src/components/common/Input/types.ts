import { ChangeEvent, RefObject } from 'react'

export type InputProps = {
  inputRef?: RefObject<HTMLInputElement>
  type?: string
  name?: string
  value: string
  placeholder: string
  helperText?: string
  isClear?: boolean
  error?: boolean
  isPassword?: boolean
  autofocus?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}
