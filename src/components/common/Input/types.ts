import {ChangeEvent} from 'react'

export type InputProps = {
  id: string
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
