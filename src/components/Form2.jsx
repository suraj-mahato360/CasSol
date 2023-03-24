import React from 'react'

const Form2 = ({ formData, setFormData }) => {
  return (
    <form action="" method='POST'>
            <label htmlFor="">Home Loan</label>
            <input type="text" placeholder='&#8377;0' value={formData.home_loan} onChange={(e) => {
          setFormData({ ...formData, home_loan: e.target.value });
        }}/>
            <label htmlFor="">Maintenance</label>
            <input type="text" placeholder='&#8377;0' value={formData.maintenance} onChange={(e) => {
          setFormData({ ...formData, maintenance: e.target.value });
        }}/>
            <label htmlFor="">Rent</label>
            <input type="text" placeholder='&#8377;0' value={formData.rent} onChange={(e) => {
          setFormData({ ...formData, rent: e.target.value });
        }}/>
            <label htmlFor="">Home Insurance</label>
            <input type="text" placeholder='&#8377;0' value={formData.home_insurance} onChange={(e) => {
          setFormData({ ...formData, home_insurance: e.target.value });
        }}/>
            <label htmlFor="">Repairs</label>
            <input type="text" placeholder='&#8377;0' value={formData.repairs} onChange={(e) => {
          setFormData({ ...formData, repairs: e.target.value });
        }}/>
            <label htmlFor="">Water/Gas/Electricity</label>
            <input type="text" placeholder='&#8377;0' value={formData.bills} onChange={(e) => {
          setFormData({ ...formData, bills: e.target.value });
        }}/>
            <label htmlFor="">TV/Internet</label>
            <input type="text" placeholder='&#8377;0' value={formData.internet} onChange={(e) => {
          setFormData({ ...formData, internet: e.target.value });
        }}/>
            <label htmlFor="">Other</label>
            <input type="text" placeholder='&#8377;0' value={formData.home_other} onChange={(e) => {
          setFormData({ ...formData, home_other: e.target.value });
        }}/>
    </form>
  )
}

export default Form2