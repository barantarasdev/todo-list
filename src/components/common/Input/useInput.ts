import useActive from 'src/hooks/useActive'

function useInput() {
  const { isActive, toggleIsActive } = useActive()

  return { showPassword: isActive, onClick: toggleIsActive }
}

export default useInput
