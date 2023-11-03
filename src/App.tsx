import React, {Suspense, PureComponent} from 'react'
import {Route, Routes} from 'react-router'

import SignIn from 'src/auth/signIn'
import SignUp from 'src/auth/signUp'
import withPrivateRoute from 'src/hocks/withPrivateRoute'
import withRestrictedRoute from 'src/hocks/withRestrictRoute'
import Home from 'src/pages/Home'
import Layout from 'src/pages/Layout'
import NotFound from 'src/pages/NotFound'
import {Routes as RoutesT} from 'src/types'

const PrivateHome = withPrivateRoute(Home)
const RestrictedSignIn = withRestrictedRoute(SignIn)
const RestrictedSignUp = withRestrictedRoute(SignUp)

class App extends PureComponent {
  render() {
    return (
      <Suspense fallback={<p>Loader</p>}>
        <Routes>
          <Route path={RoutesT.HOME} element={<Layout />}>
            <Route index element={<PrivateHome />} />
            <Route path={RoutesT.SIGN_IN} element={<RestrictedSignIn />} />
            <Route path={RoutesT.SIGN_UP} element={<RestrictedSignUp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    )
  }
}

export default App
