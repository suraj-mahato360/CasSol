import React from 'react'

const Form5 = ({ formData, setFormData }) => {
  return (
    <form action="" method='POST'>
          <div>
            <label htmlFor="">Groceries/Household: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.groceries} onChange={(e) => {
              setFormData({ ...formData, groceries: e.target.value });
            }}/></div>
            <div>
            <label htmlFor="">Clothing: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.cloths} onChange={(e) => {
          setFormData({ ...formData, cloths: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Entertainment: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.entertainment} onChange={(e) => {
          setFormData({ ...formData, entertainment: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Medical: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.medical} onChange={(e) => {
          setFormData({ ...formData, medical: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Pet Supplies: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.pet_supply} onChange={(e) => {
          setFormData({ ...formData, pet_supply: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Other Expenses: </label>
            <input type="number" placeholder='&#8377;0'  value={formData.other_expenses} onChange={(e) => {
          setFormData({ ...formData, other_expenses: e.target.value });
        }}/></div>
        </form>

  )
}

export default Form5