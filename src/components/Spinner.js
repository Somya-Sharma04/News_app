import React from 'react'
import loading_spinner from './loading_spinner.gif'

const Spinner = ()=> {
  
    return (
      <div className='text-center my-5' >
        <img src={loading_spinner} alt="loading"  style = {{height:"50px"}}/>
      </div>
    )
  }


export default Spinner