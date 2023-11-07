import { FC } from 'react'
import EyeButton from 'src/components/EyeButton'
import * as Styled from 'src/components/common/Input/styles'
import { InputProps } from 'src/components/common/Input/types'
import useInput from 'src/components/common/Input/useInput'
import { InputBlock, Label } from 'src/styles'

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  errors = {},
  isPassword = false,
}) => {
  const {
    isVisiblePassword,
    toggleIsFocused,
    toggleIsVisiblePassword,
    isInputError,
    isActive,
    isEyeButton,
  } = useInput({
    value,
    isPassword,
    name,
    errors,
  })

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
          onFocus={toggleIsFocused}
          onBlur={toggleIsFocused}
        />

        {isEyeButton && (
          <EyeButton
            isVisiblePassword={isVisiblePassword}
            onToggleIsVisiblePassword={toggleIsVisiblePassword}
          />
        )}
      </Styled.InputContent>

      <Label htmlFor={name} $isError={isInputError as boolean}>
        {errors[name]}
      </Label>
    </InputBlock>
  )
}

export default Input
