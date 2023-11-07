import StyledSelect from 'src/components/common/Select/styles'
import { SelectProps } from 'src/components/common/Select/types'

function Select({
  isError,
  name,
  value: currentValue,
  onChange,
  options,
}: SelectProps) {
  return (
    <StyledSelect
      $isError={isError}
      id={name}
      name={name}
      value={currentValue}
      onChange={onChange}
      required
    >
      <option value="" disabled>
        Choose option
      </option>

      {options.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
