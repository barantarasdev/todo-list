/* eslint-disable react/jsx-props-no-spreading */
import React, {ComponentType, PropsWithChildren, ReactElement} from 'react'
import {Navigate} from 'react-router-dom'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import {RoutesPath} from 'src/types'

function withRestrictedRoute<T extends {}>(
  WrappedComponent: ComponentType<PropsWithChildren<T>>
): ComponentType<PropsWithChildren<T>> {
  return (props: PropsWithChildren<T>): ReactElement => {
    const accessToken = getDataFromLocalStorage('access_token')

    return !accessToken ? (
      <WrappedComponent {...props} />
    ) : (
      <Navigate to={RoutesPath.HOME} replace />
    )
  }
}

export default withRestrictedRoute
