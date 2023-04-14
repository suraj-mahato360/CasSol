import React from 'react'

const Form6 = ({ formData, setFormData }) => {
  return (
        <form action="" method='POST'>
          <div>
            <label htmlFor="">Emergency Fund: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.emergency_fund} onChange={(e) => {
          setFormData({ ...formData, emergency_fund: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Investments: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.investments} onChange={(e) => {
          setFormData({ ...formData, investments: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Retirement: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.retirement} onChange={(e) => {
          setFormData({ ...formData, retirement: e.target.value });
        }}/></div>
        </form>
        
  )
}

export default Form6