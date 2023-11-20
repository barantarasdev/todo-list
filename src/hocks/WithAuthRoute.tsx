/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'

import useAuthentication from '@/hooks/useAuthentication'

function WithAuthRoute<P extends object>(Component: React.ComponentType<P>) {
  function PrivateRouteWrapper(props: P) {
    useAuthentication(false)

    return <Component {...props} />
  }

  return PrivateRouteWrapper
}

export default WithAuthRoute
