import { useMemo } from 'react'
import { Field } from 'react-final-form'
import { AuthFieldProps } from 'src/components/AuthField/types'
import Input from 'src/components/common/Input'

function AuthField({ name, type, placeholder }: AuthFieldProps) {
  const isPassword = useMemo(() => type === 'password', [type])

  return (
    <Field name={name}>
      {({ input: { name: fieldName, value, onChange }, meta: { error } }) => (
        <Input
          type={type}
          name={fieldName}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          error={Boolean(error)}
          helperText={error}
          isPassword={isPassword}
        />
      )}
    </Field>
  )
}

export default AuthField
