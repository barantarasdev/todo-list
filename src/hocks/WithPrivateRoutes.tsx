'use client'

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import useAuthentication from '@/hooks/useAuthentication'

function WithPrivateRoute<P extends object>(Component: React.ComponentType<P>) {
  function PrivateRouteWrapper(props: P) {
    useAuthentication(true)

    return <Component {...props} />
  }

  return PrivateRouteWrapper
}

export default WithPrivateRoute
