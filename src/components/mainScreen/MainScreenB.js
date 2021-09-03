import React from 'react'
import { useState } from 'react'
import Button from '../common/Button'
import ButtonsModal from '../common/ButtonsModal'
import NewModal from '../common/NewModal'

function MainScreenB() {
  const [show, setShow] = useState(false)
  const [newModal, setNewModal] = useState(false)

  const columns = ["Name","Email","Status","Gender"]
  const openModal = () => {
    setShow(true)
  }

  const handleCloseModal = () => {
    setShow(false)
  }
  const closeNewModal = () => {
    setNewModal(false)
  }
  const showNewModal = () => {
    setNewModal(true)
  }

  return (
    <>
      {/* <Button text="Button B" clickHandler={openModal}/>
      <ButtonsModal
        show={show}
        handleClose={handleCloseModal}
        buttons={true}
        openNewModal={showNewModal}
        header="Modal B"
        buttonText="Active Users"
      />
        <NewModal
        show={showNewModal}
        handleClose={closeNewModal}
        columns={columns}
        modalTitle='Active Users' 
        /> */}
    </>
  )
}

export default MainScreenB
