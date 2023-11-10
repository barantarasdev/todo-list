import { CircularProgress } from '@mui/material'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import SignIn from 'src/auth/signIn'
import SignUp from 'src/auth/signUp'
import withPrivateRoute from 'src/hocks/withPrivateRoute'
import withRestrictedRoute from 'src/hocks/withRestrictRoute'
import Home from 'src/pages/Home'
import Layout from 'src/pages/Layout'
import NotFound from 'src/pages/NotFound'
import { RoutesPath } from 'src/types'

const PrivateHome = withPrivateRoute(Home)
const PublicSignIn = withRestrictedRoute(SignIn)
const PublicSignUp = withRestrictedRoute(SignUp)
const { HOME, SIGN_IN, SIGN_UP } = RoutesPath

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<PrivateHome />} />
          <Route path={SIGN_IN} element={<PublicSignIn />} />
          <Route path={SIGN_UP} element={<PublicSignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
