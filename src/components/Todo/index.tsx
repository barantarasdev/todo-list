import React, { FC } from 'react'
import confirmIcon from 'src/../public/assets/icons/confirm.svg'
import removeIcon from 'src/../public/assets/icons/remove.svg'
import * as Styled from 'src/components/Todo/styles'
import { TodoProps } from 'src/components/Todo/types'
import useTodo from 'src/components/Todo/useTodo'
import Checkbox from 'src/components/common/Checkbox'

const Todo: FC<TodoProps> = ({ todo }) => {
  const {
    value,
    inputRef,
    isCompleted,
    isEditing,
    onChange,
    onDelete,
    onBlur,
    onFocus,
    onCompleted,
    onSubmit,
  } = useTodo({ todo })

  return (
    <Styled.Item $isFocused={isEditing} $isCompleted={isCompleted}>
      <Checkbox value={isCompleted} onChange={onCompleted} />

      <Styled.Form onSubmit={onSubmit}>
        <Styled.Input
          $isCompleted={isCompleted}
          type="text"
          value={value}
          ref={inputRef}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={!isEditing}
        />

        {isEditing && (
          <Styled.Button type="submit" onClick={() => onSubmit()}>
            <img src={confirmIcon} alt="icon confirm" />
          </Styled.Button>
        )}
      </Styled.Form>

      <Styled.RemoveButton type="button" onClick={onDelete}>
        <img src={removeIcon} alt="icon remove" />
      </Styled.RemoveButton>
    </Styled.Item>
  )
}

export default Todo
