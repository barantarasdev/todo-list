import { ValidateProps } from '@/types'
import { AnyObject, ValidationError } from 'yup'

async function validate<T extends AnyObject>({
  values,
  schema,
}: ValidateProps<T>) {
  try {
    await schema.validate(values, { abortEarly: false })
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
