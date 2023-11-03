import {PureComponent} from 'react'

import 'src/components/common/select/styles.css'
import {SelectProps} from 'src/components/common/select/types'

class Select extends PureComponent<SelectProps> {
  render() {
    const {value: ValueProps, onChange, options, id} = this.props

    return (
      <select
        id={id}
        className="select"
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
      </select>
    )
  }
}

export default Select
