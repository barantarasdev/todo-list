import { Component } from 'react'

import 'src/components/common/input/styles.css'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = { isFocused: false }
  }

  onFocus = () => {
    this.setState({ isFocused: true })
  }

  onBlur = () => {
    this.setState({ isFocused: false })
  }

  render() {
    const { id, type, placeholder, value, onChange, errors = [] } = this.props
    const isActive = this.state.isFocused || value

    return (
      <div className="input">
        <div className={`input__container ${isActive ? 'active' : ''}`}>
          <label
            htmlFor={id}
            className={`input__label--placeholder ${isActive ? 'active' : ''}`}
          >
            {placeholder}
          </label>

          <input
            className="input__value"
            placeholder={!isActive ? '' : placeholder}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>

        <label className="input__label" htmlFor={id}>
          {errors[id] && <>{errors[id]}</>}
        </label>
      </div>
    )
  }
}

export default Input
