import React from 'react'

const Form3 = ({ formData, setFormData }) => {
  return (
    <form action="" method='POST'>
      <div>
            <label htmlFor="">Car/Bike Payment: </label>
            <input type="number" placeholder='&#8377;0' value={formData.vehicle_payment} onChange={(e) => {
          setFormData({ ...formData, vehicle_payment: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Gas/Fuel: </label>
            <input type="number" placeholder='&#8377;0' value={formData.fuel} onChange={(e) => {
          setFormData({ ...formData, fuel: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Car/Bike Insurance: </label>
            <input type="number" placeholder='&#8377;0' value={formData.vehicle_insuarance} onChange={(e) => {
          setFormData({ ...formData, vehicle_insuarance: e.target.value });
        }}/></div>
        <div>
            <label htmlFor="">Repairs: </label>
            <input type="number" placeholder='&#8377;0' value={formData.vehicle_repairs} onChange={(e) => {
          setFormData({ ...formData, vehicle_repairs: e.target.value });
        }}/></div>
    </form>
  )
}

export default Form3