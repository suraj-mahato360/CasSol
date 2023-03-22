import React from 'react'

const Form6 = () => {
  return (
    <div>
        <div className="form-title">
            <h2>Monthly Savings</h2>
        </div>
        <div className="form-input">
        <form action="" method="post">
            <label htmlFor="">Emergency Fund</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Investments</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Retirement</label>
            <input type="text" placeholder='&#8377;0'/>
            <input type="button" value="Back" />
            <input type="button" value="Next" />
        </form>
        </div>
    </div>
  )
}

export default Form6