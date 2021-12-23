import "./ExpenseForm.css";
import { useState } from "react";



function ExpenseForm(props) {
  let [enteredTitleState, SetEnteredTitle] = useState("");
  let [enteredAmountState, SetEnteredAmount] = useState("");
  let [enteredDateState, SetEnteredDate] = useState("");
  //so note here how we get the value itself and the function to set the current state of the value

  function submitHandler(event) {
    event.preventDefault();

    let expenseLog = {
      title: enteredTitleState,
      price: enteredAmountState,
      date: new Date(enteredDateState),
    };
    
    props.onFormSubmit(expenseLog);

    SetEnteredTitle('')
    SetEnteredAmount('')
    SetEnteredDate('')

    
  }

  function titleChangeHandler(event) {
    console.log(event.target.value);
    SetEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    
    var price = parseInt(event.target.value, 10)
    SetEnteredAmount(price);
    console.log("Hi " + event.target.value);
  }
  function dateChangeHandler(event) {
    console.log(event.target.value);
    SetEnteredDate(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitleState}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min='0.01'
            value={enteredAmountState}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDateState}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
