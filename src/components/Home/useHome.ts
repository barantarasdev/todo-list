import { getDataFromLocalStorage } from '@/utils/localeStorage'

function useHome() {
  const user = getDataFromLocalStorage('user')

  return { userName: user?.userName }
}

export default useHome
