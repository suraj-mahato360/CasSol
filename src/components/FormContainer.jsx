import React from 'react'
import Form from './Form'
import Calci from '../assets/calci.svg'

const FormContainer = () => {
  return (
    <div className='content-box'>
        <img src={Calci} alt="" />
        <div className="box">
            <div className="progress-bar">
                <div className="bar">
                    <ul>
                        <li>1</li>
                        <div className='line'></div>
                        <li>2</li>
                        <div className='line'></div>
                        <li>3</li>
                        <div className='line'></div>
                        <li>4</li>
                        <div className='line'></div>
                        <li>5</li>
                        <div className='line'></div>
                        <li>6</li>
                    </ul>
                </div>
            </div>
            <div className="forms">
                <Form />
            </div>
        </div>
        
    </div>
  )
}

export default FormContainer