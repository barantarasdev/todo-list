import { Field as RFFField } from 'react-final-form'

import Input from '@/components/common/Input'
import { FieldProps } from '@/components/common/Field/types'
import useField from '@/components/common/Field/useField'

function Field({ name, type, placeholder }: FieldProps) {
  const { isPassword } = useField({ type })

  return (
    <RFFField name={name}>
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
    </RFFField>
  )
}

export default Field
