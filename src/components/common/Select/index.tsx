import { FormControl, FormHelperText, Select as MUISelect } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import { SelectProps } from '@/components/common/Select/types'

function Select({
  items,
  value,
  onChange = () => {},
  error,
  helperText = ' ',
}: SelectProps) {
  return (
    <FormControl error={error}>
      <MUISelect value={value} onChange={onChange}>
        <MenuItem disabled value="">
          Choose item
        </MenuItem>

        {items.map(({ value: itemValue, name: itemName }) => (
          <MenuItem key={itemValue} value={itemValue}>
            {itemName}
          </MenuItem>
        ))}
      </MUISelect>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default Select
