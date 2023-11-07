import useSignIn from 'src/auth/signIn/useSignIn'
import {
  AuthButton,
  AuthForm,
  AuthFormBlock,
  AuthLink,
  AuthTitle,
} from 'src/auth/styles'
import Input from 'src/components/common/Input'
import { RoutesPath, Validate } from 'src/types'

function SignIn() {
  const { onSubmit, userEmail, onChange, userPassword, isDisabledButton } =
    useSignIn()

  return (
    <AuthFormBlock>
      <AuthTitle>Sign in</AuthTitle>

      <AuthForm onSubmit={onSubmit} noValidate>
        <Input
          name={Validate.EMAIL}
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={onChange}
        />

        <Input
          name={Validate.PASSWORD}
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={onChange}
          isPassword
        />

        <AuthButton type="submit" disabled={isDisabledButton}>
          Sign in
        </AuthButton>

        <AuthLink to={RoutesPath.SIGN_UP}>Sign up</AuthLink>
      </AuthForm>
    </AuthFormBlock>
  )
}

export default SignIn
