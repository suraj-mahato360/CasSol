import React from 'react'

const Form1 = ({ formData, setFormData }) => {
  return (
    <form action="" method='POST'>
            <label htmlFor="">Salary/Wages</label>
            <input type="text" placeholder='&#8377;0' value={formData.salary} onChange={(e) => {
          setFormData({ ...formData, salary: e.target.value });
        }}/>
            <label htmlFor="">Other Income</label>
            <input type="text" placeholder='&#8377;0' value={formData.other_income} onChange={(e) => {
          setFormData({ ...formData, other_income: e.target.value });
        }}/>
    </form>
  )
}

export default Form1