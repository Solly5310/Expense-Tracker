import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";


let dummyExpenses = [
  {
    title: "Add an expense and select the year to track it",
    price: 0,
    date: new Date(2022, 2, 5),
    id: "e1",
  },
];

function App() {

  
  let [expenses, expenseState] = useState(dummyExpenses);
  let [expenseStart, expenseStartState] = useState(true)

  function expenseSubmitted(newExpense) {
      expenseState((prevExpense) => {
        if(expenseStart)
        {
          prevExpense.shift();
          expenseStartState(false)
        }
        let newTransList = [newExpense, ...prevExpense];
        return newTransList;
      });
    }
  
  

  return (
    <div>
      <NewExpense onExpenseSubmit={expenseSubmitted}></NewExpense>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}


export default App;
