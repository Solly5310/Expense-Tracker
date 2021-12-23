import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";

let dummyExpenses = [
  {
    title: "Chocolate",
    price: 23.65,
    date: new Date(2021, 12, 2),
    id: "e1",
  },
  {
    title: "Candy",
    price: 13.24,
    date: new Date(2021, 12, 2),
    id: "e2",
  },
  {
    title: "Master Chief",
    price: 60.0,
    date: new Date(2021, 12, 3),
    id: "e3",
  },
  {
    title: "Pen",
    price: 2.0,
    date: new Date(2021, 12, 3),
    id: "e4",
  },
];

function App() {
  let [expenses, expenseState] = useState(dummyExpenses);

  function ExpenseSubmitted(newExpense) {
    expenseState((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onExpenseSubmit={ExpenseSubmitted}></NewExpense>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;
