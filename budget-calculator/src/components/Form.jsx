import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form7 from "./Form7";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    salary: Number,
    other_income: Number,
    home_loan: Number,
    maintenance: Number,
    rent: Number,
    home_insurance: Number,
    repairs: Number,
    bills: Number,
    internet: Number,
    vehicle_payment: Number,
    fuel: Number,
    vehicle_insuarance: Number,
    vehicle_repairs: Number,
    school_supplies: Number,
    student_loan: Number,
    education_fee: Number,
    tution_fee: Number,
    groceries: Number,
    cloths: Number,
    entertainment: Number,
    medical: Number,
    pet_supply: Number,
    other_expenses: Number,
    emergency_fund: Number,
    investments: Number,
    retirement: Number,
  });

  let monthlySaving =
    eval(formData.emergency_fund) +
    eval(formData.investments) +
    eval(formData.retirement);

  let foodnPerson =
    eval(formData.groceries) +
    eval(formData.cloths) +
    eval(formData.entertainment) +
    eval(formData.medical) +
    eval(formData.pet_supply) +
    eval(formData.other_expenses);

  let educationExpense =
    eval(formData.school_supplies) +
    eval(formData.student_loan) +
    eval(formData.education_fee) +
    eval(formData.tution_fee);

  let transportExpense =
    eval(formData.vehicle_payment) +
    eval(formData.fuel) +
    eval(formData.vehicle_insuarance) +
    eval(formData.vehicle_repairs);

  let housingExpense =
    eval(formData.home_loan) +
    eval(formData.maintenance) +
    eval(formData.rent) +
    eval(formData.home_insurance) +
    eval(formData.repairs) +
    eval(formData.bills) +
    eval(formData.internet);

    let salary = eval(formData.salary) + eval(formData.other_income);

  if (page == 6) {
    let reamining_money =
      salary -
      housingExpense -
      transportExpense -
      educationExpense -
      foodnPerson -
      monthlySaving;

    console.log(reamining_money);
    console.log(monthlySaving);
    console.log(foodnPerson);
  }

  const formTitles = [
    "Monthly Income",
    "Housing Expenses",
    "Transportation Expenses",
    "Educational Expenses",
    "Food and Personal",
    "Monthly Savings",
  ];

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
    } else if (page === 5) {
      return <Form6 formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
      return <Form7 formData={formData} setFormData={setFormData} />;
    }
  };

  const CurrPage = () => {
    setPage((currPage) => currPage + 1);
  };
  const PostData = async () => {
    educationExpense.preventDefault();

    const {name, email} = formData;
    const monthlySaving = monthlySaving;
    const foodnPerson = foodnPerson;
    const educationExpense = educationExpense;
    const transportExpense = transportExpense;
    const housingExpense = housingExpense;
    const salary = salary;

    const res = await fetch('/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, monthlySaving, foodnPerson, educationExpense, transportExpense, housingExpense, salary
      })
    })
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Input");
      console.log("Invalid Input");
    } else {
      window.alert("Task Complete")
      console.log("Task Complete")
    }
  };

  const styles = {
    popup: {
      display: page == 6 ? "none" : "block",
    },
  };

  return (
    <div>
      <div className="form-title">
        <h2>{formTitles[page]}</h2>
      </div>
      <div className="form-input">
        {PageDisplay()}
        <div className="form-btn">
          {" "}
          <button
            disabled={page == 0}
            className="btn"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn submitbtn"
            onClick={() => {
              CurrPage();
              PostData();
            }}
            style={styles.popup}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
