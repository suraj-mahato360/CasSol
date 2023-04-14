import React from 'react'

const Form1 = ({ formData, setFormData }) => {
  // const {totalIncome, setTotalIncome} = useState(0)

  // const TotalIncome = ()=>{
  //   setTotalIncome(eval(formData.salary+formData.other_income))
  // }
  // TotalIncome()
  // console.log(totalIncome)
  return (
    <form action="" method='POST'>
      <div>
            <label htmlFor="">Salary/Wages: </label>
            <input type="number" placeholder='&#8377;0' value={formData.salary} onChange={(e) => {
          setFormData({ ...formData, salary: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Other Income: </label>
            <input type="number" placeholder='&#8377;0' value={formData.other_income} onChange={(e) => {
          setFormData({ ...formData, other_income: e.target.value });
        }}/></div>
    </form>
  )
}

export default Form1