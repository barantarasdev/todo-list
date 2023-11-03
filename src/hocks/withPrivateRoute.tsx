/* eslint-disable react/jsx-props-no-spreading */

import React, {ComponentType, ReactElement, PropsWithChildren} from 'react'
import {Navigate} from 'react-router-dom'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import {Routes} from 'src/types'

function withPrivateRoute<T extends {}>(
  WrappedComponent: ComponentType<PropsWithChildren<T>>
): ComponentType<PropsWithChildren<T>> {
  return (props: PropsWithChildren<T>): ReactElement => {
    const user = getDataFromLocalStorage('user')

    return user ? (
      <WrappedComponent {...props} />
    ) : (
      <Navigate to={Routes.SIGN_IN} replace />
    )
  }
}

export default withPrivateRoute
