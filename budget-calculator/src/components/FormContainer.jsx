import React from 'react'
import Form from './Form'
import Calci from '../assets/calci.svg'

const FormContainer = () => {
  return (
    <div className='content-box'>
        {/* <img src={Calci} alt="" /> */}
        <div className="box">    
            <div className="forms">
                <Form />
            </div>
        </div>
        
    </div>
  )
}

export default FormContainer