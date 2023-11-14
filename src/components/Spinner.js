import React from 'react'
import Loading from './Loading.gif'

const Spinner = () => {
    return (
      <div class="text-center" style={{height : "50px"}}>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }

export default Spinner
