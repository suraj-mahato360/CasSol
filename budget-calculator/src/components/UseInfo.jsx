import React from 'react'
import BudgetFlow from '../assets/budget_flow.svg'

const UseInfo = () => {
  return (
    <div className="nuts">
    <div className='info-container'>
        <div className="image">
            <img src={BudgetFlow} alt="" />
        </div>
        <div className="instruction">
            <h3>Welcome To <span>CasSol</span>💖 <br/> calculate your monthly or yearly <br /> budget in just few minutes</h3>
            <button className='btn'>Get Started</button>
        </div>
        
    </div>
    <div className="title">
        <h1>Budget Calculator</h1>
        </div>
    </div>
  )
}

export default UseInfo