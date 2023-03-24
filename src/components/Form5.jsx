import React from 'react'

const Form5 = ({ formData, setFormData }) => {
  return (
        <form action="" method='POST'>
            <label htmlFor="">Groceries/Household</label>
            <input type="text" placeholder='&#8377;0'  value={formData.groceries} onChange={(e) => {
          setFormData({ ...formData, groceries: e.target.value });
        }}/>
            <label htmlFor="">Clothing</label>
            <input type="text" placeholder='&#8377;0'  value={formData.cloths} onChange={(e) => {
          setFormData({ ...formData, cloths: e.target.value });
        }}/>
            <label htmlFor="">Entertainment</label>
            <input type="text" placeholder='&#8377;0'  value={formData.entertainment} onChange={(e) => {
          setFormData({ ...formData, entertainment: e.target.value });
        }}/>
            <label htmlFor="">Medical</label>
            <input type="text" placeholder='&#8377;0'  value={formData.medical} onChange={(e) => {
          setFormData({ ...formData, medical: e.target.value });
        }}/>
            <label htmlFor="">Pet Supplies</label>
            <input type="text" placeholder='&#8377;0'  value={formData.pet_supply} onChange={(e) => {
          setFormData({ ...formData, pet_supply: e.target.value });
        }}/>
            <label htmlFor="">Other Expenses</label>
            <input type="text" placeholder='&#8377;0'  value={formData.food_other} onChange={(e) => {
          setFormData({ ...formData, food_other: e.target.value });
        }}/>
        </form>

  )
}

export default Form5