import {Component} from 'react';

import 'src/components/common/select/styles.css';

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value, onChange, options, id} = this.props;

    return (
      <select
        id={id}
        className="select"
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Choose option
        </option>

        {options.map(({value, title}) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
