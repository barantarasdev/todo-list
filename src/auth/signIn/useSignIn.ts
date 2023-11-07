import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks/useRedux'
import { SignInCreator } from 'src/store/slices/userSlice/actionCreators'

function useSignIn() {
  const [formData, setFormData] = useState({ userEmail: '', userPassword: '' })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isDisabledButton = useMemo(
    () => !formData.userEmail.length || !formData.userPassword.length,
    [formData]
  )

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      setFormData(prev => ({ ...prev, [name]: value }))
    },
    [setFormData]
  )

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      dispatch(
        SignInCreator(formData.userEmail, formData.userPassword, navigate)
      )
    },
    [dispatch, SignInCreator, formData, navigate]
  )

  return {
    userEmail: formData.userEmail,
    userPassword: formData.userPassword,
    onSubmit,
    onChange,
    isDisabledButton,
  }
}

export default useSignIn
