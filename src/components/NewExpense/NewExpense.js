import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import {useState} from 'react'
import React from 'react';

function NewExpense(props) {
  

   function FormSubmission(expense) {
   
      let newExpense={
         ...expense,
         id: Math.random()
      };
   props.onExpenseSubmit(newExpense)
   buttonState(newExpenseSubmit)
  };

  function cancelButton() {
    buttonState(newExpenseSubmit)
  }
  
  let submitForm = false
  let newExpenseSubmit = true
  let [buttonType, buttonState] = useState(newExpenseSubmit);

  if(buttonType === newExpenseSubmit)
  {
    return(
      <div className= "new-expense">
        <button onClick={() => buttonState(submitForm)}>New Expense</button>
      </div>
    )
  }


  return (
    <div className="new-expense">
      <ExpenseForm cancel={cancelButton} onFormSubmit={FormSubmission}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
