import React, { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'
import { getDataFromLocalStorage } from 'src/helpers/storageHelper'
import { RoutesPath } from 'src/types'

function withPrivateRoute(WrappedComponent: ComponentType): ComponentType {
  return () => {
    const user = getDataFromLocalStorage('user')

    return user ? (
      <WrappedComponent />
    ) : (
      <Navigate to={RoutesPath.SIGN_IN} replace />
    )
  }
}

export default withPrivateRoute
