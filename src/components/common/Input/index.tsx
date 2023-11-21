import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear'

import useInput from '@/components/common/Input/useInput'
import { InputProps } from '@/components/common/Input/types'

function Input({
  type,
  name,
  placeholder,
  error = false,
  helperText = ' ',
  value,
  isPassword,
  onChange,
  isClear,
  onClear,
  autofocus = false,
  inputRef,
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
      autoFocus={autofocus}
      InputProps={{
        inputRef,
        endAdornment: (isPassword || isClear) && (
          <InputAdornment position="end">
            <IconButton
              onClick={isPassword ? toggleShowPassword : onClear}
              color="primary"
              edge="end"
            >
              {isPassword &&
                (showPassword ? <Visibility /> : <VisibilityOff />)}
              {isClear && !!value.length && <ClearIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Input
