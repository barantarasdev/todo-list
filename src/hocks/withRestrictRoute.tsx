import React, { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'
import { getDataFromLocalStorage } from 'src/helpers/storageHelper'
import { RoutesPath } from 'src/types'

function withRestrictedRoute(WrappedComponent: ComponentType): ComponentType {
  return function F() {
    const accessToken = getDataFromLocalStorage('accessToken')

    return !accessToken ? (
      <WrappedComponent />
    ) : (
      <Navigate to={RoutesPath.HOME} replace />
    )
  }
}

export default withRestrictedRoute
