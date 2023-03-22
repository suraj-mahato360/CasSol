import React from 'react'

const Form1 = () => {
  return (
    <div>
        <div className="form-title">
            <h2>Monthly Income</h2>
        </div>
        <div className="form-input">
        <form action="" method="post">
            <label htmlFor="">Salary/Wages</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Other Income</label>
            <input type="text" placeholder='&#8377;0'/>
            <input type="button" value="Back" />
            <input type="button" value="Next" />
        </form>
        </div>
    </div>
  )
}

export default Form1