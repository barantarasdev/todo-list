import { useCallback, useEffect, useRef } from 'react'
import useActive from 'src/hooks/useActive'

function useAvatar() {
  const { isActive, toggleIsActive } = useActive()
  const avatarRef = useRef<HTMLInputElement>(null)

  const onClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        avatarRef.current &&
        isActive &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        toggleIsActive()
      }
    },
    [avatarRef, isActive, toggleIsActive]
  )

  useEffect(() => {
    document.addEventListener('click', onClickOutside)

    return () => {
      document.removeEventListener('click', onClickOutside)
    }
  }, [onClickOutside])

  return { isActive, avatarRef, toggleIsActive }
}

export default useAvatar
