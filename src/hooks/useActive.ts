import { useReducer } from 'react'

const useActive = (isActiveProp: boolean = false) => {
  const [isActive, toggleIsActive] = useReducer(v => !v, isActiveProp)

  return { isActive, toggleIsActive }
}

export default useActive
