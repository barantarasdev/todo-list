import { FC } from 'react'
import checkedIcon from 'src/../public/assets/icons/confirm.svg'
import Button from 'src/components/common/Checkbox/styles'
import { CheckboxProps } from 'src/components/common/Checkbox/types'

const Checkbox: FC<CheckboxProps> = ({ value, onChange }) => (
  <Button $isChecked={value} type="button" onClick={onChange}>
    {value && <img src={checkedIcon} alt="icon" />}
  </Button>
)

export default Checkbox
