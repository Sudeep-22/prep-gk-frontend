import React from 'react'

function Alert(props) {
    let capitalize = (inp1) => {return inp1.slice(0,1).toUpperCase() + inp1.slice(1).toLowerCase();}
  return (
    <div style={{height : "5px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type==="danger"?"Note":props.alert.type)}!!  </strong>{props.alert.content}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }
</div>
  )
}

export default Alert