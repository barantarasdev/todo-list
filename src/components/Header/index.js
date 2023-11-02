import { Component } from 'react'

import Avatar from 'src/components/Avatar'
import 'src/components/Header/styles.css'
import { getDataFromLocaleStorage } from 'src/helpers/storageHelper'

class Header extends Component {
  render() {
    const { user_name } = getDataFromLocaleStorage('user')

    return (
      <header className="header">
        <h1>Welcome, {user_name}</h1>

        <Avatar />
      </header>
    )
  }
}

export default Header
