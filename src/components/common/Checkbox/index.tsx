import checkedIcon from 'src/../public/assets/icons/confirm.svg'
import CheckboxButton from 'src/components/common/Checkbox/styles'
import { CheckboxProps } from 'src/components/common/Checkbox/types'

function Checkbox({ value, onChange }: CheckboxProps) {
  return (
    <CheckboxButton $isChecked={value} type="button" onClick={onChange}>
      {value && <img src={checkedIcon} alt="icon" />}
    </CheckboxButton>
  )
}

export default Checkbox
