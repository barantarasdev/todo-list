import { Component } from 'react'

import 'src/components/common/select/styles.css'

class Select extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onChange, options, id } = this.props

    return (
      <select
        id={id}
        className="select"
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Choose option
        </option>

        {options.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    )
  }
}

export default Select
