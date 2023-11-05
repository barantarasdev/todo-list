import {ValidateT} from 'src/types'

function validateEmail(value: string): boolean {
  return (
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null
  )
}

function validatePhone(value: string): boolean {
  return (
    value.match(/^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im) !==
    null
  )
}

function validateSite(value: string): boolean {
  return (
    value.match(/^(https?:\/\/)?(?!www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) !==
    null
  )
}

function validatePassword(value: string): boolean {
  return (
    value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
    ) !== null
  )
}

function validateSignUp(
  type: ValidateT,
  value: string | number,
  currentPassword?: string | null
): string | null {
  if (!value) {
    return 'This field is required'
  }

  switch (type) {
    case 'user_age':
      if (+value > 60) {
        return 'This age is old'
      }

      if (+value < 18) {
        return 'This age is small'
      }

      break
    case 'user_email':
      if (!validateEmail(String(value))) {
        return 'This email is not valid'
      }

      break
    case 'user_phone':
      if (!validatePhone(String(value))) {
        return 'This phone is not valid'
      }

      break
    case 'user_site':
      if (!validateSite(String(value))) {
        return 'This url is not valid'
      }

      break
    case 'user_password':
      if (!validatePassword(String(value))) {
        return 'This password is not valid'
      }

      break
    case 'user_confirm_password':
      if (currentPassword !== value) {
        return 'The password does not match'
      }

      break
    case 'user_name':
      if (String(value).length < 2) {
        return 'The name must be at least 2 character'
      }

      break
    default:
      break
  }

  return null
}

export default validateSignUp
