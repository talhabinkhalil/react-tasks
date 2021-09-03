import React from 'react'

function Button({text,clickHandler,propClass}) {
  return (
    <>
      <button onClick={clickHandler} className={propClass ? propClass : "btn btn-primary"} style={{marginRight:"2px"}}>{text ? text : "Button"}</button>
    </>
  ) 
}

export default Button
