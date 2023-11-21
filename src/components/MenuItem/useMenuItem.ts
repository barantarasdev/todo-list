/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { useAppDispatch } from '@/hooks/useRedux'
import processClick from '@/components/MenuItem/helpers'
import { MenuItemProps } from '@/components/MenuItem/types'

function useMenuItem({ option: { value }, onClose }: MenuItemProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onClick = useCallback(() => {
    processClick({ value, router, dispatch })
    onClose()
  }, [onClose, value, dispatch])

  return { onClick }
}

export default useMenuItem
