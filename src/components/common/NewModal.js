import React from 'react'
import { useEffect } from 'react';
import {Modal} from 'react-bootstrap';
import Button from './Button';
function NewModal({show,handleClose,backdropType = "static",modalTitle,columns,data,buttons,dataB}) {
  return (
    <Modal
      backdrop={backdropType}
      show={show}
      onHide={handleClose}
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title>{modalTitle && modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data &&  <table class="table">
        <thead>
          <tr>
            {columns && columns.map(col =>(
            <th scope="col">{col}</th>
            ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map(d=>(
          <tr>
            <td>{d.name}</td>
            <td>{d.email}</td>
            {dataB &&
            <>
            <td>{d.gender}</td>
            <td>{d.status}</td>
            </>
            }
          </tr>
          ))}
        </tbody>
      </table>
      }
      {buttons &&
      <>
        <Button text="All Users A"  />
        <Button text="All Users B"  />
        <Button text="All Users C" clickHandler={handleClose}  />
       </> 
      }
     
      </Modal.Body>
      <Modal.Footer>
        <Button clickHandler={handleClose} text="Close Modal" />
      </Modal.Footer>     
    </Modal>
  )
}

export default NewModal
