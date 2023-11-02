import {Component} from "react";

import {PrimaryContext} from "src/context";
import {logOut} from "src/services/userService";
import {removeUser} from "src/helpers/userHelper";
import {AVATAR_ITEMS, ROUTES} from "src/constants";
import 'src/components/AvatarItems/styles.css';

class AvatarItem extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = PrimaryContext;

  onClick = async (value) => {
    if (value === 'logout') {
      await logOut();
      removeUser();
      this.context.setRoute(ROUTES.SIGN_IN);
    }
  };

  render() {
    return (
      <ul className="avatar__items">
        {AVATAR_ITEMS.map(({value, name}) => (
          <li key={value} className="avatar__item">
            <button
              onClick={() => this.onClick(value)}
              className="avatar__item__btn"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default AvatarItem;