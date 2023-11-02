export function validateSignUp(type, value, currentPassword) {
  if (!value) {
    return 'This field is required'
  }

  switch (type) {
    case 'age':
      if (value > 60) {
        return 'This age is old'
      }

      if (value < 18) {
        return 'This age is small'
      }

      break
    case 'email':
      const isEmailCorrect = String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )

      if (!isEmailCorrect) {
        return 'This email is not valid'
      }

      break
    case 'tel':
      const isPhoneCorrect = String(value).match(
        /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
      )
      if (!isPhoneCorrect) {
        return 'This phone is not valid'
      }

      break
    case 'site':
      const isSiteCorrect = value.match(
        /^(https?:\/\/)?(?!www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      )

      if (!isSiteCorrect) {
        return 'This url is not valid'
      }

      break
    case 'password':
      const isPasswordCorrect = value.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/,
      )

      if (!isPasswordCorrect) {
        return 'This password is not valid'
      }

      break
    case 'confirmPassword':
      if (currentPassword !== value) {
        return 'The password does not match'
      }

      break
    case 'name':
      if (value.length < 2) {
        return 'The name must be at least 2 character'
      }

      break
    default:
      return
  }
}
