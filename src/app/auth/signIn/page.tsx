'use client'

import { Form } from 'react-final-form'
import { Button, Typography } from '@mui/material'

import Field from '@/components/common/Field'
import WithAuthRoute from '@/hocks/WithAuthRoute'
import useSignIn from '@/app/auth/signIn/useSignIn'
import { RoutesE, SignInInputsE } from '@/types'
import { AuthForm, AuthFormBlock, AuthLink } from '@/styles'

function SignIn() {
  const { onSubmit } = useSignIn()

  return (
    <AuthFormBlock>
      <Typography variant="h2">Sign in</Typography>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <AuthForm onSubmit={handleSubmit} noValidate>
            <Field
              type="email"
              name={SignInInputsE.EMAIL}
              placeholder="Email"
            />

            <Field
              type="password"
              name={SignInInputsE.PASSWORD}
              placeholder="Password"
            />

            <Button type="submit">Sign in</Button>

            <AuthLink href={RoutesE.SIGN_UP}>Sign up</AuthLink>
          </AuthForm>
        )}
      />
    </AuthFormBlock>
  )
}

export default WithAuthRoute(SignIn)
