import React from 'react'

const Form3 = ({ formData, setFormData }) => {
  return (
    <form action="" method='POST'>
            <label htmlFor="">Car/Bike Payment</label>
            <input type="text" placeholder='&#8377;0' value={formData.vehicle_payment} onChange={(e) => {
          setFormData({ ...formData, vehicle_payment: e.target.value });
        }}/>
            <label htmlFor="">Gas/Fuel</label>
            <input type="text" placeholder='&#8377;0' value={formData.fuel} onChange={(e) => {
          setFormData({ ...formData, fuel: e.target.value });
        }}/>
            <label htmlFor="">Car/Bike Insurance</label>
            <input type="text" placeholder='&#8377;0' value={formData.vehicle_insuarance} onChange={(e) => {
          setFormData({ ...formData, vehicle_insuarance: e.target.value });
        }}/>
            <label htmlFor="">Repairs</label>
            <input type="text" placeholder='&#8377;0' value={formData.vehicle_repairs} onChange={(e) => {
          setFormData({ ...formData, vehicle_repairs: e.target.value });
        }}/>
            <label htmlFor="">Other</label>
            <input type="text" placeholder='&#8377;0' value={formData.vehicle_other} onChange={(e) => {
          setFormData({ ...formData, vehicle_other: e.target.value });
        }}/>
    </form>
  )
}

export default Form3