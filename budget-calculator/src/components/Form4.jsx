import React from 'react'

const Form4 = ({ formData, setFormData }) => {
  return (
        <form action="" method='POST'>
          <div>
            <label htmlFor="">School supplies: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.school_supplies} onChange={(e) => {
          setFormData({ ...formData, school_supplies: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Student Loan: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.student_loan} onChange={(e) => {
          setFormData({ ...formData, student_loan: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">College/School Fee: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.education_fee} onChange={(e) => {
          setFormData({ ...formData, education_fee: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Tution Fee: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.tution_fee} onChange={(e) => {
          setFormData({ ...formData, tution_fee: e.target.value });
        }}/></div>
        
        </form>
  )
}

export default Form4