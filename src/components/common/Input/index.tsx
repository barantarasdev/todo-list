import { Component } from 'react'
import EyeButton from 'src/components/EyeButton'
import * as Styled from 'src/components/common/Input/styles'
import { InputProps, InputStatesT } from 'src/components/common/Input/types'
import { InputBlock, Label } from 'src/styles'

class Input extends Component<InputProps, InputStatesT> {
  constructor(props: InputProps) {
    super(props)

    this.state = { isFocused: false, isVisiblePassword: false }
  }

  onToggleIsFocused = () => {
    this.setState(({ isFocused }) => ({
      isFocused: !isFocused,
    }))
  }

  onToggleIsVisiblePassword = () => {
    this.setState(({ isVisiblePassword }) => ({
      isVisiblePassword: !isVisiblePassword,
    }))
  }

  render() {
    const { isFocused, isVisiblePassword } = this.state
    const {
      name,
      type,
      placeholder,
      value,
      onChange,
      errors = {},
      isPassword = false,
    } = this.props
    const isActive = isFocused || !!value
    const isInputError = !!errors[name]
    const isEyeButton = isPassword && !!String(value).length

    return (
      <InputBlock>
        <Styled.InputContent>
          <Styled.TopLabel
            $isError={isInputError}
            $isActive={isActive}
            htmlFor={name}
          >
            {placeholder}
          </Styled.TopLabel>

          <Styled.Input
            $isActive={isActive}
            placeholder={placeholder}
            type={isVisiblePassword ? 'text' : type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={this.onToggleIsFocused}
            onBlur={this.onToggleIsFocused}
          />

          {isEyeButton && (
            <EyeButton
              isVisiblePassword={isVisiblePassword}
              onToggleIsVisiblePassword={this.onToggleIsVisiblePassword}
            />
          )}
        </Styled.InputContent>

        <Label htmlFor={name} $isError={isInputError}>
          {errors[name]}
        </Label>
      </InputBlock>
    )
  }
}

export default Input
