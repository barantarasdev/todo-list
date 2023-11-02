import {Component, createRef} from 'react';
import userIcon from 'src/../public/assets/icons/user.svg';

import AvatarItems from "src/components/AvatarItems";
import 'src/components/Avatar/styles.css';

class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = {isActive: false};
    this.avatarRef = createRef();
  }

  onClickAvatar = () => {
    this.setState(({isActive}) => ({
      isActive: !isActive,
    }));
  };

  onClickOutside = (e) => {
    const isClickedOutside =
      this.avatarRef && !this.avatarRef.current.contains(e.target);

    if (isClickedOutside) {
      this.setState({isActive: false});
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside);
  }

  render() {
    return (
      <div className="avatar" ref={this.avatarRef}>
        <button className="avatar__btn" onClick={this.onClickAvatar}>
          <img className="icon" src={userIcon} alt="user icon"/>
        </button>

        {this.state.isActive && <AvatarItems/>}
      </div>
    );
  }
}

export default Avatar;
