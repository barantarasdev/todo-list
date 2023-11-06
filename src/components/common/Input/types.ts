import { ChangeEvent } from 'react'
import { Validate } from 'src/types'

export type InputProps = {
  name: Validate
  type: string
  placeholder: string
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  errors?: Record<string, string>
  isPassword?: boolean
}

export type InputStatesT = {
  isFocused: boolean
  isVisiblePassword: boolean
}
