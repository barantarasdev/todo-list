/* eslint-disable react/jsx-props-no-spreading */
import React, {ComponentType, PropsWithChildren, ReactElement} from 'react'
import {Navigate} from 'react-router-dom'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import {RoutesPath} from 'src/types'

function withPrivateRoute<T extends {}>(
  WrappedComponent: ComponentType<PropsWithChildren<T>>
): ComponentType<PropsWithChildren<T>> {
  return (props: PropsWithChildren<T>): ReactElement => {
    const user = getDataFromLocalStorage('user')

    return user ? (
      <WrappedComponent {...props} />
    ) : (
      <Navigate to={RoutesPath.SIGN_IN} replace />
    )
  }
}

export default withPrivateRoute
