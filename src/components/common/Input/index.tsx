import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import useInput from '@/components/common/Input/useInput'
import { InputProps } from '@/components/common/Input/types'

function Input({
  type,
  name,
  placeholder,
  error,
  helperText = ' ',
  value,
  onChange,
  isPassword,
}: InputProps) {
  const { showPassword, toggleShowPassword } = useInput()
  return (
    <TextField
      type={showPassword ? 'text' : type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={placeholder}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton onClick={toggleShowPassword} color="primary" edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Input
