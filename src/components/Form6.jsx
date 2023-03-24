import React from 'react'

const Form6 = ({ formData, setFormData }) => {
  return (
        <form action="" method='POST'>
            <label htmlFor="">Emergency Fund</label>
            <input type="text" placeholder='&#8377;0'  value={formData.emergency_fund} onChange={(e) => {
          setFormData({ ...formData, emergency_fund: e.target.value });
        }}/>
            <label htmlFor="">Investments</label>
            <input type="text" placeholder='&#8377;0'  value={formData.investments} onChange={(e) => {
          setFormData({ ...formData, investments: e.target.value });
        }}/>
            <label htmlFor="">Retirement</label>
            <input type="text" placeholder='&#8377;0'  value={formData.retirement} onChange={(e) => {
          setFormData({ ...formData, retirement: e.target.value });
        }}/>
        </form>
  )
}

export default Form6