/* eslint-disable react/jsx-props-no-spreading */
import { ComponentType } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigateT } from 'src/types'

function withNavigation<T extends NavigateT>(Component: ComponentType<T>) {
  return function F(props: Omit<T, keyof NavigateT>) {
    const navigate = useNavigate()

    const componentProps = { ...props, navigate } as T

    return <Component {...componentProps} />
  }
}

export default withNavigation
