import React from 'react'

const Form7 = ({ formData, setFormData }) => {
  return (
    <form action="" method='POST'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='&#8377;0' value={formData.name} onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}/>
            <label htmlFor="">Other Income</label>
            <input type="text" placeholder='&#8377;0' value={formData.email} onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}/>
    </form>
  )
}

export default Form7