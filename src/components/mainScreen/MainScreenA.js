import React, { useEffect } from 'react'
import { useState } from 'react';
import { getAllUsers } from '../../services/AllUsers';
import Button from '../common/Button'
import ButtonsModal from '../common/ButtonsModal';
import NewModal from '../common/NewModal';
import "./MainScreen.css";

function MainScreenA() {
  const [show, setShow] = useState(false)
  const [data, setData] = useState([])
  const [even, setEven] = useState(true)
  const [showNewModal, setShowNewModal] = useState(false)
  const columns = ["Name","Email"]
  useEffect(()=>{
    getAllUsers().then(data=>setData(data.data.filter(d => (
      even ? (d.id % 2) === 0 : (d.id % 2) !== 0  
    ))))
  },[even])

  const handleCloseModal = () => {
    setShow(false)
  }
  const openModal = () => {
    setShow(true)
  }
  const openNewModal = () => {
    setShowNewModal(true)
  }
  const closeNewModal = () => {
    setShowNewModal(false)
  }
  const checkBoxOnChange = (e) => {
    setEven(even ? false : true);
  }
  return (
    <>
    div
    div
    div
      <Button text="Button A" clickHandler={openModal} />
      <ButtonsModal
        show={show}
        handleClose={handleCloseModal}
        buttons={true}
        openNewModal={openNewModal}
        header="Modal A"
        buttonText="All Users"
        evenOdd={even}
        check={true}
        checkBoxOnChange={checkBoxOnChange}
      />
      <NewModal
        show={showNewModal}
        handleClose={closeNewModal}
        columns={columns}
        data={true}
        modalTitle='All Users'
        data={data}
        />
    </>
  )
}
export default MainScreenA
