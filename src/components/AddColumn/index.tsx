import useAddColumn from 'src/components/AddColumn/useAddColumn'
import { HomeActionBlock, HomeButton, HomeInput } from 'src/pages/Home/styles'

function addColumn() {
  const { value, onChange, onKeyDown, onSubmit } = useAddColumn()

  return (
    <HomeActionBlock>
      <HomeInput
        value={value}
        onChange={onChange}
        placeholder="Col name"
        onKeyDown={onKeyDown}
      />
      <HomeButton onClick={onSubmit}>Add new column</HomeButton>
    </HomeActionBlock>
  )
}

export default addColumn
