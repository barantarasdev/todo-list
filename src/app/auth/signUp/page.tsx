'use client'

import React from 'react'
import { Form, Field as RFFField } from 'react-final-form'
import { Button, Typography } from '@mui/material'

import Field from '@/components/common/Field'
import Select from '@/components/common/Select'
import WithAuthRoute from '@/hocks/WithAuthRoute'
import useSignUp from '@/app/auth/signUp/useSignUp'
import { GENDER_OPTIONS } from '@/constants'
import { RoutesE, SignUpInputsE } from '@/types'
import { AuthForm, AuthFormBlock, StyledLink } from '@/styles'

function SignUp() {
  const { NAME, AGE, EMAIL, PASSWORD, CONFIRM_PASSWORD, PHONE, SITE, GENDER } =
    SignUpInputsE
  const { onSubmit, onValidate } = useSignUp()

  return (
    <AuthFormBlock>
      <Typography variant="h2">Sign up</Typography>

      <Form
        onSubmit={onSubmit}
        validate={onValidate}
        render={({ handleSubmit, valid }) => (
          <AuthForm onSubmit={handleSubmit} noValidate>
            <Field type="text" name={NAME} placeholder="Name" />

            <Field type="email" name={EMAIL} placeholder="Email" />

            <Field type="tel" name={PHONE} placeholder="Phone" />

            <Field type="number" name={AGE} placeholder="Age" />

            <RFFField name={GENDER}>
              {({ input: { value, onChange, name }, meta: { error } }) => (
                <Select
                  items={GENDER_OPTIONS}
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder="Gender"
                  error={Boolean(error)}
                  helperText={error}
                />
              )}
            </RFFField>

            <Field type="url" name={SITE} placeholder="Site" />

            <Field type="password" name={PASSWORD} placeholder="Password" />

            <Field
              type="password"
              name={CONFIRM_PASSWORD}
              placeholder="Confirm"
            />

            <Button type="submit" disabled={!valid}>
              Sign up
            </Button>

            <StyledLink href={RoutesE.SIGN_IN}>Sign in</StyledLink>
          </AuthForm>
        )}
      />
    </AuthFormBlock>
  )
}

export default WithAuthRoute(SignUp)
