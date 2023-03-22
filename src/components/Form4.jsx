import React from 'react'

const Form4 = () => {
  return (
    <div>
         <div className="form-title">
            <h2>Educational Expenses</h2>
        </div>
        <div className="form-input">
        <form action="" method="post">
            <label htmlFor="">School supplies</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Student Loan</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">College/School Fee</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Tution Fee</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Other</label>
            <input type="text" placeholder='&#8377;0'/>
            <input type="button" value="Back" />
            <input type="button" value="Next" />
        </form>
        </div>
    </div>
  )
}

export default Form4