import React from "react";

const Form2 = ({ formData, setFormData }) => {
  return (
    <form action="" method="POST">
      <div>
        <label htmlFor="">Home Loan: </label>
        <input
          type="number"
          placeholder="&#8377;0"
          value={formData.home_loan}
          onChange={(e) => {
            setFormData({ ...formData, home_loan: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="">Maintenance: </label>
        <input
          type="number"
          placeholder="&#8377;0"
          value={formData.maintenance}
          onChange={(e) => {
            setFormData({ ...formData, maintenance: e.target.value });
          }}
        />
      </div>{" "}
      <div>
        <label htmlFor="">Rent: </label>
        <input
          type="number"
          placeholder="&#8377;0"
          value={formData.rent}
          onChange={(e) => {
            setFormData({ ...formData, rent: e.target.value });
          }}
        />
      </div>{" "}
      <div>
        <label htmlFor="">Home Insurance: </label>
        <input
          type="number"
          placeholder="&#8377;0"
          value={formData.home_insurance}
          onChange={(e) => {
            setFormData({ ...formData, home_insurance: e.target.value });
          }}
        />
      </div>{" "}
      <div>
        <label htmlFor="">Repairs: </label>
        <input
          type="number"
          placeholder="&#8377;0"
          value={formData.repairs}
          onChange={(e) => {
            setFormData({ ...formData, repairs: e.target.value });
          }}
        />
      </div>{" "}
      <div>
        <label htmlFor="">Water/Gas/Electricity: </label>
        <input
          type="number"
          placeholder="&#8377;0"
          value={formData.bills}
          onChange={(e) => {
            setFormData({ ...formData, bills: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="">TV/Internet: </label>
        <input
          type="number"
          placeholder="&#8377;0"
          value={formData.internet}
          onChange={(e) => {
            setFormData({ ...formData, internet: e.target.value });
          }}
        />
      </div>
    </form>
  );
};

export default Form2;
