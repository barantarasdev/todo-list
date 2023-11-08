import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Field, Form } from 'react-final-form'
import useSignIn from 'src/auth/signIn/useSignIn'
import { AuthForm, AuthFormBlock, AuthLink } from 'src/auth/styles'
import Input from 'src/components/common/Input'
import { RoutesPath, SignUpInputs } from 'src/types'

function SignIn() {
  const { onSubmit } = useSignIn()

  return (
    <AuthFormBlock>
      <Typography variant="h2">Sign in</Typography>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <AuthForm onSubmit={handleSubmit} noValidate>
            <Field name={SignUpInputs.EMAIL}>
              {({ input: { value, onChange, name } }) => (
                <Input
                  type="email"
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder="Email"
                />
              )}
            </Field>

            <Field name={SignUpInputs.PASSWORD}>
              {({ input: { value, onChange, name } }) => (
                <Input
                  type="password"
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder="Password"
                  isPassword
                />
              )}
            </Field>

            <Button type="submit">Sign in</Button>

            <AuthLink to={RoutesPath.SIGN_UP}>Sign up</AuthLink>
          </AuthForm>
        )}
      />
    </AuthFormBlock>
  )
}

export default SignIn
