import { signUpValidationSchema } from 'src/auth/signUp/form'
import { SignUpValues } from 'src/auth/signUp/types'
import { ValidationError } from 'yup'

async function validate(values: SignUpValues) {
  try {
    await signUpValidationSchema.validate(values, { abortEarly: false })
  } catch (error) {
    if (error instanceof ValidationError) {
      return error.inner.reduce(
        (acc: Record<string, string>, err: ValidationError) => {
          if (err.path) {
            acc[err.path] = err.message
          }

          return acc
        },
        {}
      )
    }
    throw error
  }

  return undefined
}

export default validate
