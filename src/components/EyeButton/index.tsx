import { EyeButtonProps } from 'src/components/EyeButton/types'
import { InputEyeButton } from 'src/components/common/Input/styles'

import inVisibleIcon from '../../../public/assets/icons/invisible.svg'
import visibleIcon from '../../../public/assets/icons/visible.svg'

function EyeButton({
  isVisiblePassword,
  onToggleIsVisiblePassword,
}: EyeButtonProps) {
  return (
    <InputEyeButton type="button" onClick={onToggleIsVisiblePassword}>
      <img src={isVisiblePassword ? visibleIcon : inVisibleIcon} alt="icon" />
    </InputEyeButton>
  )
}

export default EyeButton
