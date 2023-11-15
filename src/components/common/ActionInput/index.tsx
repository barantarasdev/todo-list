import { IconButton, InputAdornment, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

import { ActionInputProps } from '@/components/common/ActionInput/types'

function ActionInput({
  inputRef,
  value,
  onChange,
  onClear,
  placeholder,
}: ActionInputProps) {
  return (
    <TextField
      inputRef={inputRef}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {!!value.length && (
              <IconButton
                onClick={onClear}
                type="button"
                color="primary"
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  )
}

export default ActionInput
