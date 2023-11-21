import { number, object, ref, string } from 'yup'

import {
  EMAIL_PATTERN,
  NOT_VALID_FIELD,
  PASSWORD_PATTERN,
  PHONE_PATTERN,
  REQUIRED_FIELD,
  SITE_PATTERN,
} from '@/constants'

const signUpValidationSchema = object({
  userName: string()
    .required(`Name ${REQUIRED_FIELD}`)
    .min(2, 'Name must be at least 2 characters'),
  userAge: number()
    .required(`Age ${REQUIRED_FIELD}`)
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .min(18, 'This age is small')
    .max(60, 'This age is old'),
  userPhone: string()
    .required(`Phone number ${REQUIRED_FIELD}`)
    .matches(PHONE_PATTERN, `This phone ${NOT_VALID_FIELD}`),
  userSite: string()
    .required(`Site ${REQUIRED_FIELD}`)
    .matches(SITE_PATTERN, `This phone ${NOT_VALID_FIELD}`),
  userEmail: string()
    .required(`Email ${REQUIRED_FIELD}`)
    .matches(EMAIL_PATTERN, `This email ${NOT_VALID_FIELD}`),
  userGender: string().required(`Gender ${REQUIRED_FIELD}`),
  userPassword: string()
    .required(`Password ${REQUIRED_FIELD}`)
    .min(6, 'Password must be at least 6 characters')
    .matches(PASSWORD_PATTERN, 'Password must contain A,a,1,/'),
  userConfirmPassword: string()
    .oneOf([ref('userPassword'), undefined], 'Passwords must match')
    .required(`Confirming password ${REQUIRED_FIELD}`),
})

export default signUpValidationSchema
