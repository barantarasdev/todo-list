import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validateSignUp from 'src/helpers/validationHelper'
import { useAppDispatch } from 'src/hooks/useRedux'
import { SignUpCreator } from 'src/store/slices/userSlice/actionCreators'
import { Validate } from 'src/types'

function useSignUp() {
  const [formData, setFormData] = useState({
    userEmail: '',
    userName: '',
    userPassword: '',
    userConfirmPassword: '',
    userPhone: '',
    userAge: '',
    userGender: '',
    userSite: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target

      setFormData(prev => ({ ...prev, [name]: value }))

      if (isSubmitted) {
        const validatedInput = validateSignUp(
          name as Validate,
          value,
          name === Validate.CONFIRM_PASSWORD ? formData.userPassword : null
        )

        setErrors(prev => {
          const newErrors = { ...prev }

          if (validatedInput) {
            newErrors[name] = validatedInput
          } else {
            delete newErrors[name]
          }

          return newErrors
        })
      }
    },
    [setFormData, isSubmitted, validateSignUp, formData.userPassword, setErrors]
  )

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newErrors: Record<string, string> = {}

      Object.entries(formData).forEach(([key, value]) => {
        const error = validateSignUp(
          key as Validate,
          value,
          key === 'userConfirmPassword' ? formData.userPassword : null
        )

        if (error) {
          newErrors[key] = error
        }
      })

      setErrors(newErrors)
      setIsSubmitted(true)

      if (!Object.values(newErrors).length) {
        dispatch(
          SignUpCreator({ ...formData }, navigate, () => {
            setIsSubmitted(false)
          })
        )
      }
    },
    [formData, validateSignUp, setErrors, setIsSubmitted, dispatch, navigate]
  )

  return {
    formData,
    errors,
    onChange,
    onSubmit,
  }
}

export default useSignUp
