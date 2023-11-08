import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Field, Form } from 'react-final-form'
import validate from 'src/auth/signUp/helpers'
import useSignUp from 'src/auth/signUp/useSignUp'
import { AuthForm, AuthFormBlock, AuthLink } from 'src/auth/styles'
import AuthField from 'src/components/AuthField'
import Select from 'src/components/common/Select'
import { GENDER_OPTIONS } from 'src/constants'
import { RoutesPath, SignUpInputs } from 'src/types'

function SignUp() {
  const { onSubmit, isSubmitted } = useSignUp()

  return (
    <AuthFormBlock>
      <Typography variant="h2">Sign up</Typography>

      <Form
        onSubmit={onSubmit}
        validate={isSubmitted ? validate : undefined}
        render={({ handleSubmit }) => (
          <AuthForm onSubmit={handleSubmit} noValidate>
            <AuthField
              type="text"
              name={SignUpInputs.NAME}
              placeholder="Name"
            />

            <AuthField
              type="email"
              name={SignUpInputs.EMAIL}
              placeholder="Email"
            />

            <AuthField
              type="tel"
              name={SignUpInputs.PHONE}
              placeholder="Phone"
            />

            <AuthField
              type="number"
              name={SignUpInputs.AGE}
              placeholder="Age"
            />

            <Field name={SignUpInputs.GENDER}>
              {({ input: { value, onChange, name }, meta: { error } }) => (
                <Select
                  items={GENDER_OPTIONS}
                  name={name}
                  value={value}
                  placeholder="Gender"
                  onChange={onChange}
                  error={Boolean(error)}
                  helperText={error}
                />
              )}
            </Field>

            <AuthField type="url" name={SignUpInputs.SITE} placeholder="Site" />

            <AuthField
              type="password"
              name={SignUpInputs.PASSWORD}
              placeholder="Password"
            />

            <AuthField
              type="password"
              name={SignUpInputs.CONFIRM_PASSWORD}
              placeholder="Confirm"
            />

            <Button type="submit">Sign up</Button>

            <AuthLink to={RoutesPath.SIGN_IN}>Sign in</AuthLink>
          </AuthForm>
        )}
      />
    </AuthFormBlock>
  )
}

export default SignUp
