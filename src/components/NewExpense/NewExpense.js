import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import {useState} from 'react'
function NewExpense(props) {
  
   function FormSubmission(expense) {
   
      let newExpense={
         ...expense,
         id: Math.random()
      };
   props.onExpenseSubmit(newExpense)
   buttonState(1)
  };

  function cancelButton() {
    buttonState(1)
  }
  

  let [buttonType, buttonState] = useState(1);

  if(buttonType === 1)
  {
    return(
      <div className= "new-expense">
        <button onClick={() => buttonState(2)}>New Expense</button>
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
