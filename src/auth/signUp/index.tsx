import {ChangeEvent, Component, ContextType, FormEvent} from 'react'

import {SignUpStatesT} from 'src/auth/signUp/types'
import * as Styled from 'src/auth/styles'
import Input from 'src/components/common/input'
import Select from 'src/components/common/select'
import {GENDER_OPTIONS} from 'src/constants'
import PrimaryContext from 'src/context'
import {storeUser} from 'src/helpers/userHelper'
import validateSignUp from 'src/helpers/validationHelper'
import withNavigation from 'src/hocks/withNavigation'
import {signUp} from 'src/services/userService'
import {InputBlock, Label} from 'src/styles'
import {NavigateT, Routes, ValidatesT} from 'src/types'

class SignUp extends Component<NavigateT, SignUpStatesT> {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  constructor(props: NavigateT) {
    super(props)

    this.state = {
      formData: {
        user_email: '',
        user_name: '',
        user_password: '',
        user_confirm_password: '',
        user_phone: '',
        user_age: '',
        user_gender: '',
        user_site: '',
      },
      errors: {},
    }
  }

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {id, value} = e.target
    const {errors, formData} = this.state
    const isErrors = Object.keys(errors).length

    this.setState(prevStates => ({
      formData: {...prevStates.formData, [id]: value},
    }))

    if (isErrors) {
      const validatedInput = validateSignUp(
        id as ValidatesT,
        value,
        id === 'user_confirm_password' ? formData.user_password : null
      )

      this.setState(prevStates => {
        const newErrors = {...prevStates.errors}

        if (validatedInput) {
          newErrors[id] = validatedInput
        } else {
          delete newErrors[id]
        }

        return {
          errors: {...newErrors},
        }
      })
    }
  }

  onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {setTodos, setSnackbar} = this.context
    const {formData, errors} = this.state
    const newErrors: Record<string, string> = {}
    const {navigate} = this.props

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateSignUp(
        key as ValidatesT,
        value,
        key === 'user_confirm_password' ? formData.user_password : null
      )

      if (error) {
        newErrors[key] = error as string
      }
    })

    this.setState({errors: newErrors})

    if (!Object.keys(errors).length) {
      try {
        const {access_token, refresh_token, user_id} = await signUp({
          ...formData,
        })
        storeUser(
          {user_name: formData.user_name, user_id},
          access_token,
          refresh_token
        )
        setTodos([])
        navigate(Routes.HOME)
      } catch (err) {
        setSnackbar('User already exists')
      }
    }
  }

  render() {
    const {errors, formData} = this.state

    return (
      <Styled.FormBlock>
        <Styled.Title>Sign up</Styled.Title>

        <Styled.Form onSubmit={this.onSubmit} noValidate>
          <Input
            id="user_name"
            type="text"
            placeholder="Name"
            value={formData.user_name}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_email"
            type="email"
            placeholder="Email"
            value={formData.user_email}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_phone"
            type="tel"
            placeholder="Phone"
            value={formData.user_phone}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_age"
            type="number"
            placeholder="Age"
            value={formData.user_age}
            onChange={this.onChange}
            errors={errors}
          />

          <InputBlock>
            <Select
              isError={!!errors.user_gender}
              id="user_gender"
              options={GENDER_OPTIONS}
              value={formData.user_gender}
              onChange={this.onChange}
            />

            <Label $isError={!!errors.user_gender} htmlFor="gender">
              {errors.user_gender}
            </Label>
          </InputBlock>

          <Input
            id="user_site"
            type="url"
            placeholder="Site"
            value={formData.user_site}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_password"
            type="password"
            placeholder="Password"
            value={formData.user_password}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_confirm_password"
            type="password"
            placeholder="Confirm password"
            value={formData.user_confirm_password}
            onChange={this.onChange}
            errors={errors}
          />

          <Styled.Button type="submit">Sign up</Styled.Button>

          <Styled.Link to={Routes.SIGN_IN}>Sign in</Styled.Link>
        </Styled.Form>
      </Styled.FormBlock>
    )
  }
}

export default withNavigation(SignUp)
