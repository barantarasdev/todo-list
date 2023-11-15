import { ChangeEvent } from 'react'

export type InputProps = {
  type: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  helperText: string
  error?: boolean
  isPassword?: boolean
}
