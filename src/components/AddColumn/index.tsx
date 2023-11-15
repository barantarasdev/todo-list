import ActionInput from '@/components/common/ActionInput'
import useAddColumn from '@/components/AddColumn/useAddColumn'
import { Form, Button } from '@/components/AddColumn/styles'

function AddColumn() {
  const { value, onChange, onClear, onSubmit, inputRef } = useAddColumn()

  return (
    <Form onSubmit={onSubmit}>
      <ActionInput
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        onClear={onClear}
        placeholder="Column name"
      />

      <Button>Add new column</Button>
    </Form>
  )
}

export default AddColumn
