import { FC } from 'react'
import { EyeButtonProps } from 'src/components/EyeButton/types'
import * as Styled from 'src/components/common/Input/styles'

import inVisibleIcon from '../../../public/assets/icons/invisible.svg'
import visibleIcon from '../../../public/assets/icons/visible.svg'

const EyeButton: FC<EyeButtonProps> = ({
  isVisiblePassword,
  onToggleIsVisiblePassword,
}) => (
  <Styled.EyeButton type="button" onClick={onToggleIsVisiblePassword}>
    <img src={isVisiblePassword ? visibleIcon : inVisibleIcon} alt="icon" />
  </Styled.EyeButton>
)

export default EyeButton
