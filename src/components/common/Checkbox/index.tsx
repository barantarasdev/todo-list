import { PureComponent } from 'react'
import checkedIcon from 'src/../public/assets/icons/confirm.svg'
import Button from 'src/components/common/Checkbox/styles'
import { CheckboxProps } from 'src/components/common/Checkbox/types'

class Checkbox extends PureComponent<CheckboxProps> {
  render() {
    const { value, onChange } = this.props

    return (
      <Button $isChecked={value} type="button" onClick={onChange}>
        {value && <img src={checkedIcon} alt="icon" />}
      </Button>
    )
  }
}

export default Checkbox
