import React from 'react'

const Form7 = ({ formData, setFormData }) => {
  return (
    <form action="" method='POST'>
      <div>
            <label htmlFor="">Name: </label>
            <input type="text" placeholder='Enter your name' value={formData.name} onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Email: </label>
            <input type="text" placeholder='Enter your email' value={formData.email} onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}/></div>
        <button
            className="btn"
          >
            Submit
          </button>
    </form>
  )
}

export default Form7