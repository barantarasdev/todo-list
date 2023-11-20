/* eslint-disable react-hooks/exhaustive-deps */

import { FormEvent, useCallback, useMemo, useReducer, useRef } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'

import { RoutesE } from '@/types'
import { useAppDispatch } from '@/hooks/useRedux'
import useInput from '@/hooks/useInput'
import { InviteUserCreator } from '@/store/slices/boardsSlice/actionCreator'

function useHeader() {
  const path = usePathname()
  const router = useRouter()
  const params = useParams()
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const { value, onChange, onClear } = useInput({ inputRef })
  const [modalActive, toggleModalActive] = useReducer(v => !v, false)
  const isVisible = useMemo(
    () => path !== RoutesE.SIGN_IN && path !== RoutesE.SIGN_UP,
    [path]
  )
  const name = useMemo(
    () => (path === RoutesE.SIGN_IN ? 'Sing up' : 'Sign in'),
    [path]
  )

  const onClick = useCallback(() => {
    if (path === RoutesE.SIGN_IN) {
      router.push(RoutesE.SIGN_UP)

      return
    }

    router.push(RoutesE.SIGN_IN)
  }, [path])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      onClear()
      toggleModalActive()
      dispatch(
        InviteUserCreator({ friendEmail: value, boardId: params.id as string })
      )
    },
    [toggleModalActive, onClear, value, dispatch]
  )

  return {
    onSubmit,
    value,
    onChange,
    onClear,
    inputRef,
    modalActive,
    toggleModalActive,
    name,
    onClick,
    isVisible,
    params,
  }
}

export default useHeader
