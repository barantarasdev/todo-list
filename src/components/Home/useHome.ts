import { useEffect, useState } from 'react'
import { getDataFromLocalStorage } from '@/utils/localeStorage'

function useHome() {
  const [domLoaded, setDomLoaded] = useState(false)
  const user = getDataFromLocalStorage('user')

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return { domLoaded, userName: user?.userName }
}

export default useHome
