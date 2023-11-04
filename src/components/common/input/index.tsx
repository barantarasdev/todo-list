import {Component} from 'react'

import * as Styled from 'src/components/common/input/styles'
import {InputProps, InputStatesT} from 'src/components/common/input/types'
import {InputBlock, Label} from 'src/styles'

class Input extends Component<InputProps, InputStatesT> {
  constructor(props: InputProps) {
    super(props)

    this.state = {isFocused: false}
  }

  onToggleIsFocused = () => {
    this.setState(({isFocused}) => ({
      isFocused: !isFocused,
    }))
  }

  render() {
    const {isFocused} = this.state
    const {id, type, placeholder, value, onChange, errors = {}} = this.props
    const isActive = isFocused || !!value
    const isInputError = !!errors[id]

    return (
      <InputBlock>
        <Styled.InputContent>
          <Styled.TopLabel
            $isError={isInputError}
            $isActive={isActive}
            htmlFor={id}
          >
            {placeholder}
          </Styled.TopLabel>

          <Styled.Input
            $isActive={isActive}
            placeholder={placeholder}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={this.onToggleIsFocused}
            onBlur={this.onToggleIsFocused}
          />
        </Styled.InputContent>

        <Label htmlFor={id} $isError={isInputError}>
          {errors[id]}
        </Label>
      </InputBlock>
    )
  }
}

export default Input
