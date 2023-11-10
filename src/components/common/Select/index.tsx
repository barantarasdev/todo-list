import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MUISelect,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { SelectProps } from 'src/components/common/Select/types'

function Select({
  items,
  name,
  value,
  onChange = () => {},
  placeholder,
  error,
  helperText = ' ',
}: SelectProps) {
  return (
    <FormControl error={error}>
      <InputLabel id={name}>{placeholder}</InputLabel>

      <MUISelect
        labelId={name}
        value={value}
        label={placeholder}
        onChange={onChange}
      >
        {items.map(({ value: itemValue, title }) => (
          <MenuItem key={itemValue} value={itemValue}>
            {title}
          </MenuItem>
        ))}
      </MUISelect>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default Select
