import EyeButton from 'src/components/EyeButton'
import {
  InputContent,
  InputTopLabel,
  StyledInput,
} from 'src/components/common/Input/styles'
import { InputProps } from 'src/components/common/Input/types'
import useInput from 'src/components/common/Input/useInput'
import { InputBlock, Label } from 'src/styles'

function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  errors = {},
  isPassword = false,
}: InputProps) {
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
      <InputContent>
        <InputTopLabel
          $isError={isInputError}
          $isActive={isActive}
          htmlFor={name}
        >
          {placeholder}
        </InputTopLabel>

        <StyledInput
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
      </InputContent>

      <Label htmlFor={name} $isError={isInputError as boolean}>
        {errors[name]}
      </Label>
    </InputBlock>
  )
}

export default Input
