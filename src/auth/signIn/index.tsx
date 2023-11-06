import useSignIn from 'src/auth/signIn/useSignIn'
import * as Styled from 'src/auth/styles'
import Input from 'src/components/common/Input'
import { RoutesPath, Validate } from 'src/types'

const SignIn = () => {
  const { onSubmit, userEmail, onChange, userPassword, isDisabledButton } =
    useSignIn()

  return (
    <Styled.FormBlock>
      <Styled.Title>Sign in</Styled.Title>

      <Styled.Form onSubmit={onSubmit} noValidate>
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

        <Styled.Button type="submit" disabled={isDisabledButton}>
          Sign in
        </Styled.Button>

        <Styled.Link to={RoutesPath.SIGN_UP}>Sign up</Styled.Link>
      </Styled.Form>
    </Styled.FormBlock>
  )
}

export default SignIn
