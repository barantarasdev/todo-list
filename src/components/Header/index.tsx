'use client'

import { AppBar, Button, Typography, Modal } from '@mui/material'
import { PersonAdd } from '@mui/icons-material'

import Menu from '@/components/Menu'
import Input from '@/components/common/Input'
import Navigation from '@/components/Navigation'
import useHeader from '@/components/Header/useHeader'
import { Actions, Form, Logo } from '@/components/Header/styles'
import { RoutesE } from '@/types'

function Header() {
  const {
    onSubmit,
    value,
    onChange,
    onClear,
    inputRef,
    modalActive,
    toggleModalActive,
    name,
    isVisible,
    onClick,
    params,
  } = useHeader()

  return (
    <AppBar>
      <Logo href={RoutesE.HOME}>TodoList</Logo>

      {isVisible ? (
        <>
          <Navigation />

          <Actions>
            {params?.id && (
              <Button
                color="info"
                size="small"
                startIcon={<PersonAdd />}
                onClick={toggleModalActive}
              >
                Invite friends
              </Button>
            )}

            <Menu />
          </Actions>
        </>
      ) : (
        <Button color="info" onClick={onClick}>
          {name}
        </Button>
      )}

      <Modal open={modalActive} onClose={toggleModalActive}>
        <Form onSubmit={onSubmit}>
          <Typography variant="h3">Add friend</Typography>

          <Input
            inputRef={inputRef}
            value={value}
            onChange={onChange}
            helperText=""
            onClear={onClear}
            placeholder={`Friend's email`}
            autofocus
            isClear
          />

          <Button type="submit">Add</Button>
        </Form>
      </Modal>
    </AppBar>
  )
}

export default Header
