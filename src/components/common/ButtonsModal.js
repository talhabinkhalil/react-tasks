import React from 'react'
import {Modal} from 'react-bootstrap';
import Button from './Button';

function ButtonsModal({header,text,buttons,show,handleClose,backdropType="static",openNewModal, buttonText,evenOdd,checkBoxOnChange,check}) {
  return (
    <Modal
      backdrop={backdropType}
      show={show}
      onHide={handleClose}
      scrollable={true}
    >
      <Modal.Header>
       <Modal.Title>{header && header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {buttons &&
        <>
          <Button text={buttonText} clickHandler={openNewModal} />
          {/* <Button text="Active users" clickHandler={} /> */}
          <Button text="Close" clickHandler={handleClose} />
        </>
        }
      </Modal.Body>
      <Modal.Footer>
        {check && <>
        Check To Get Only Evens
        <input type="checkbox" name="evenOdd" value={evenOdd} onChange={checkBoxOnChange} />
        </>
        }
      </Modal.Footer>
    </Modal>
  )
}

export default ButtonsModal
