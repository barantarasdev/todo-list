'use client'

import { Form } from 'react-final-form'
import { Button, Typography } from '@mui/material'

import Field from '@/components/common/Field'
import WithAuthRoute from '@/hocks/WithAuthRoute'
import useSignIn from '@/app/auth/signIn/useSignIn'
import { RoutesE, SignInInputsE } from '@/types'
import { AuthForm, AuthFormBlock, StyledLink } from '@/styles'

function SignIn() {
  const { onSubmit } = useSignIn()
  const { EMAIL, PASSWORD } = SignInInputsE

  return (
    <AuthFormBlock>
      <Typography variant="h2">Sign in</Typography>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <AuthForm onSubmit={handleSubmit} noValidate>
            <Field type="email" name={EMAIL} placeholder="Email" />

            <Field type="password" name={PASSWORD} placeholder="Password" />

            <Button type="submit">Sign in</Button>

            <StyledLink href={RoutesE.SIGN_UP}>Sign up</StyledLink>
          </AuthForm>
        )}
      />
    </AuthFormBlock>
  )
}

export default WithAuthRoute(SignIn)
