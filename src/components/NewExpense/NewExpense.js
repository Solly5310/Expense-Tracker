import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

function NewExpense(props) {
  
   function FormSubmission(expense) {
   
      let newExpense={
         ...expense,
         id: Math.random()
      };
   props.onExpenseSubmit(newExpense)
      
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={FormSubmission}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
