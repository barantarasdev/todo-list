import {Component, ContextType} from 'react'

import SignIn from 'src/auth/signIn'
import SignUp from 'src/auth/signUp'
import AddTodo from 'src/components/AddTodo'
import Header from 'src/components/Header'
import Todos from 'src/components/Todos'
import PrimaryContext from 'src/context'
import {Routes} from 'src/types'

class Layout extends Component {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  render() {
    const {route} = this.context

    if (route === Routes.SIGN_IN) {
      return <SignIn />
    }

    if (route === Routes.SIGN_UP) {
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
