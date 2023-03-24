import React, {useState} from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import Form7 from './Form7';

const Form = () => {

  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    home_loan: "",
    maintenance: "",
    Rent: "",
    home_insurance: "",
    repairs: "",
    bills: "",
    internet: "",
    vehicle_payment: "",
    fuel: "",
    vehicle_insuarance: "",
    vehicle_repairs: "",
    school_supplies: "",
    student_loan: "",
    education_fee: "",
    tution_fee: "",
    groceries: "",
    cloths: "",
    entertainment: "",
    medical: "",
    pet_supply: "",
    food_other: "",
    emergency_fund: "",
    investments: "",
    retirement: "",
    salary: "",
    other_income: "",
    home_other: "",
    vehicle_other: "",
    education_other: ""
  });

  const formTitles = ["Monthly Income","Housing Expenses","Transportation Expenses","Educational Expenses","Food and Personal","Monthly Savings"]

  const PageDisplay = () => {
    if (page === 0) {
      return <Form1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Form2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Form3 formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Form4 formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Form5 formData={formData} setFormData={setFormData} />;
    } else if (page === 5){
      return <Form6 formData={formData} setFormData={setFormData} />;
    }
     else if (page === 6){
      return <Form7 formData={formData} setFormData={setFormData} />;
    }
  };

  const CurrPage = () => {
    setPage((currPage) => currPage + 1
    )
  }

  const PostData = async () => {
    
  }

  return (
    <div>
        <div className="form-title">
            <h2>{formTitles[page]}</h2>
        </div>
        <div className="form-input">
          
          {PageDisplay()}
            <button  onClick={() => { CurrPage(); PostData();}}>Next</button>
        </div>
    </div>
  )
}

export default Form