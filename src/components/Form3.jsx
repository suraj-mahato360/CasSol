import React from 'react'

const Form3 = () => {
  return (
    <div>
         <div className="form-title">
            <h2>Transportation Expenses</h2>
        </div>
        <div className="form-input">
        <form action="" method="post">
            <label htmlFor="">Car/Bike Payment</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Gas/Fuel</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Car/Bike Insurance</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Repairs</label>
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

export default Form3