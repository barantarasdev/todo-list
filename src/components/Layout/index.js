import { Component } from 'react'

import Header from 'src/components/Header'
import AddTodo from 'src/components/AddTodo'
import Todos from 'src/components/Todos'
import { PrimaryContext } from 'src/context'
import SignIn from 'src/auth/signIn'
import SignUp from 'src/auth/signUp'
import { ROUTES } from 'src/constants'

class Layout extends Component {
  static contextType = PrimaryContext

  render() {
    if (this.context.route === ROUTES.SIGN_IN) {
      return <SignIn />
    }

    if (this.context.route === ROUTES.SIGN_UP) {
      return <SignUp />
    }

    return (
      <>
        <Header />

        <main>
          <AddTodo />

          <Todos />
        </main>
      </>
    )
  }
}

export default Layout
