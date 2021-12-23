import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";

function Expenses(props) {
  let [selectYear, yearChange] = useState("2022");
  function FilterChange(filter) {
    yearChange(filter);
  }

  let a = parseInt(selectYear);
  
  let filteredExpense = [];

  filteredExpense = props.expense.filter(expense => {return expense.date.getFullYear() === a; });

  /*for (let i = 0; i < props.expense.length; i++) {
    let expenseYear = props.expense[i].date.getFullYear()
    if(expenseYear === a)
    {
      newExpense.push(props.expense[i])
    }
    
  }
  */

  //I simply have to go through each object and if they are within the date range make sure they get mentioned

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onFilterChange={FilterChange}
        ></ExpensesFilter>
        {filteredExpense.map((expense) => (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
