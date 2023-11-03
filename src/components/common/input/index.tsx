import {Component} from 'react'

import * as Styled from 'src/components/common/input/styles'
import {InputProps, InputStatesT} from 'src/components/common/input/types'
import {InputBlock, Label} from 'src/styles'

class Input extends Component<InputProps, InputStatesT> {
  constructor(props: InputProps) {
    super(props)

    this.state = {isFocused: false}
  }

  onFocus = () => {
    this.setState({isFocused: true})
  }

  onBlur = () => {
    this.setState({isFocused: false})
  }

  render() {
    const {isFocused} = this.state

    const {id, type, placeholder, value, onChange, errors = {}} = this.props
    const isActive = isFocused || !!value

    return (
      <InputBlock>
        <Styled.InputContent>
          <Styled.TopLabel
            $isError={!!errors[id]}
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
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </Styled.InputContent>

        <Label htmlFor={id} $isError={!!errors[id]}>
          {errors[id]}
        </Label>
      </InputBlock>
    )
  }
}

export default Input
