import { number, object, ref, string } from 'yup'

import {
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
  PHONE_PATTERN,
  SITE_PATTERN,
} from '@/constants'

const signUpValidationSchema = object({
  userName: string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  userAge: number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .min(18, 'This age is small')
    .max(60, 'This age is old'),
  userPhone: string()
    .required('Phone number is required')
    .matches(PHONE_PATTERN, 'This phone is not valid'),
  userSite: string()
    .required('Site is required')
    .matches(SITE_PATTERN, 'This phone is not valid'),
  userEmail: string()
    .required('Email is required')
    .matches(EMAIL_PATTERN, 'This email is invalid'),
  userGender: string().required('Gender is required'),
  userPassword: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(PASSWORD_PATTERN, 'Password must contain A,a,1,/'),
  userConfirmPassword: string()
    .oneOf([ref('userPassword'), undefined], 'Passwords must match')
    .required('Confirming password is required'),
})

export default signUpValidationSchema
