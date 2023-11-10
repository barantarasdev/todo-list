import { TextField } from '@mui/material'
import { InputProps } from 'src/components/common/Input/types'

function Input({
  type,
  name,
  placeholder,
  error,
  helperText = ' ',
  value,
  onChange,
}: InputProps) {
  return (
    <TextField
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={placeholder}
      error={error}
      helperText={helperText}
    />
  )
}

export default Input
