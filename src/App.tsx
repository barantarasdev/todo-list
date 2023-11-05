import React, {PureComponent, Suspense} from 'react'
import {Route, Routes} from 'react-router'
import SignIn from 'src/auth/signIn'
import SignUp from 'src/auth/signUp'
import Loader from 'src/components/Loader'
import withPrivateRoute from 'src/hocks/withPrivateRoute'
import withRestrictedRoute from 'src/hocks/withRestrictRoute'
import Home from 'src/pages/Home'
import Layout from 'src/pages/Layout'
import NotFound from 'src/pages/NotFound'
import {RoutesPath} from 'src/types'

const PrivateHome = withPrivateRoute(Home)
const PrivateSignIn = withRestrictedRoute(SignIn)
const PrivateSignUp = withRestrictedRoute(SignUp)
const {HOME, SIGN_IN, SIGN_UP} = RoutesPath

class App extends PureComponent {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME} element={<Layout />}>
            <Route index element={<PrivateHome />} />
            <Route path={SIGN_IN} element={<PrivateSignIn />} />
            <Route path={SIGN_UP} element={<PrivateSignUp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    )
  }
}

export default App
