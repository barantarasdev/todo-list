import { MouseEvent, useCallback, useState } from 'react'

function useMenu() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null)

  const onClose = useCallback(() => {
    setAnchorElement(null)
  }, [setAnchorElement])

  const onOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setAnchorElement(e.currentTarget)
    },
    [setAnchorElement]
  )

  return { anchorElement, onClose, onOpen }
}

export default useMenu
