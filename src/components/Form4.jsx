import React from 'react'

const Form4 = ({ formData, setFormData }) => {
  return (
        <form action="" method='POST'>
            <label htmlFor="">School supplies</label>
            <input type="text" placeholder='&#8377;0'  value={formData.school_supplies} onChange={(e) => {
          setFormData({ ...formData, school_supplies: e.target.value });
        }}/>
            <label htmlFor="">Student Loan</label>
            <input type="text" placeholder='&#8377;0'  value={formData.student_loan} onChange={(e) => {
          setFormData({ ...formData, student_loan: e.target.value });
        }}/>
            <label htmlFor="">College/School Fee</label>
            <input type="text" placeholder='&#8377;0'  value={formData.education_fee} onChange={(e) => {
          setFormData({ ...formData, education_fee: e.target.value });
        }}/>
            <label htmlFor="">Tution Fee</label>
            <input type="text" placeholder='&#8377;0'  value={formData.tution_fee} onChange={(e) => {
          setFormData({ ...formData, tution_fee: e.target.value });
        }}/>
            <label htmlFor="">Other</label>
            <input type="text" placeholder='&#8377;0'  value={formData.education_other} onChange={(e) => {
          setFormData({ ...formData, education_other: e.target.value });
        }}/>
        </form>
  )
}

export default Form4