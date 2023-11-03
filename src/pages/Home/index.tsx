import {PureComponent} from 'react'

import AddTodo from 'src/components/AddTodo'
import Header from 'src/components/Header'
import Todos from 'src/components/Todos'

class Home extends PureComponent {
  render() {
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

export default Home
