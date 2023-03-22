import React from 'react'

const Form5 = () => {
  return (
    <div>
         <div className="form-title">
            <h2>Food and Personal</h2>
        </div>
        <div className="form-input">
        <form action="" method="post">
            <label htmlFor="">Groceries/Household</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Clothing</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Entertainment</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Medical</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Pet Supplies</label>
            <input type="text" placeholder='&#8377;0'/>
            <label htmlFor="">Other Expenses</label>
            <input type="text" placeholder='&#8377;0'/>
            <input type="button" value="Back" />
            <input type="button" value="Next" />
        </form>
        </div>
    </div>
  )
}

export default Form5