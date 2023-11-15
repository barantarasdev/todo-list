import { AnyObject, ObjectSchema } from 'yup'

export type ValidateProps<T extends AnyObject> = {
  values: T
  schema: ObjectSchema<T>
}
