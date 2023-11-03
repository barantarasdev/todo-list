import {PureComponent} from 'react'

import StyledSelect from 'src/components/common/select/styles'
import {SelectProps} from 'src/components/common/select/types'

class Select extends PureComponent<SelectProps> {
  render() {
    const {value: ValueProps, onChange, options, id, isError} = this.props

    return (
      <StyledSelect
        $isError={isError}
        id={id}
        value={ValueProps}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Choose option
        </option>

        {options.map(({value, title}) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </StyledSelect>
    )
  }
}

export default Select
