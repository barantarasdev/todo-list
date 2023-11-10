import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { InputProps } from 'src/components/common/Input/types'
import useInput from 'src/components/common/Input/useInput'

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
  const { showPassword, onClick } = useInput()

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
            <IconButton onClick={onClick} color="warning" edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Input
