import useSignUp from 'src/auth/signUp/useSignUp'
import * as Styled from 'src/auth/styles'
import Input from 'src/components/common/Input'
import Select from 'src/components/common/Select'
import { GENDER_OPTIONS } from 'src/constants'
import { InputBlock, Label } from 'src/styles'
import { RoutesPath, Validate } from 'src/types'

const SignUp = () => {
  const { formData, errors, onChange, onSubmit } = useSignUp()

  return (
    <Styled.FormBlock>
      <Styled.Title>Sign up</Styled.Title>

      <Styled.Form onSubmit={onSubmit} noValidate>
        <Input
          name={Validate.NAME}
          type="text"
          placeholder="Name"
          value={formData.userName}
          onChange={onChange}
          errors={errors}
        />

        <Input
          name={Validate.EMAIL}
          type="email"
          placeholder="Email"
          value={formData.userEmail}
          onChange={onChange}
          errors={errors}
        />

        <Input
          name={Validate.PHONE}
          type="tel"
          placeholder="Phone"
          value={formData.userPhone}
          onChange={onChange}
          errors={errors}
        />

        <Input
          name={Validate.AGE}
          type="number"
          placeholder="Age"
          value={formData.userAge}
          onChange={onChange}
          errors={errors}
        />

        <InputBlock>
          <Select
            isError={!!errors.userGender}
            name={Validate.GENDER}
            options={GENDER_OPTIONS}
            value={formData.userGender}
            onChange={onChange}
          />

          <Label $isError={!!errors.userGender} htmlFor={Validate.GENDER}>
            {errors.userGender}
          </Label>
        </InputBlock>

        <Input
          name={Validate.SITE}
          type="url"
          placeholder="Site"
          value={formData.userSite}
          onChange={onChange}
          errors={errors}
        />

        <Input
          name={Validate.PASSWORD}
          type="password"
          placeholder="Password"
          value={formData.userPassword}
          onChange={onChange}
          errors={errors}
          isPassword
        />

        <Input
          name={Validate.CONFIRM_PASSWORD}
          type="password"
          placeholder="Confirm password"
          value={formData.userConfirmPassword}
          onChange={onChange}
          errors={errors}
          isPassword
        />

        <Styled.Button type="submit" disabled={!!Object.keys(errors).length}>
          Sign up
        </Styled.Button>

        <Styled.Link to={RoutesPath.SIGN_IN}>Sign in</Styled.Link>
      </Styled.Form>
    </Styled.FormBlock>
  )
}

export default SignUp
