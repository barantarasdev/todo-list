import { ChangeEvent, Ref } from 'react'

export type ActionInputProps = {
  inputRef: Ref<HTMLInputElement>
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
}
