import React from 'react'

const Form2 = () => {
  return (
    <div>
        <div className="form-title">
            <h2>Housing Expenses</h2>
        </div>
        <div className="form-input">
        <form action="" method="post">
            <label htmlFor="">Home Loan</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Maintenance</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Rent</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Home Insurance</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Repairs</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Water/Gas/Electricity</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">TV/Internet</label>
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

export default Form2