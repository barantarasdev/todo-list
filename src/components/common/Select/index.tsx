import { FC } from 'react'
import StyledSelect from 'src/components/common/Select/styles'
import { SelectProps } from 'src/components/common/Select/types'

const Select: FC<SelectProps> = ({
  isError,
  name,
  value: currentValue,
  onChange,
  options,
}) => (
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

export default Select
