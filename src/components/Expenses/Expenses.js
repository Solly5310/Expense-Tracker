import ExpensesList from "./ExpensesList.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";

function Expenses(props) {
  let [selectYear, yearChange] = useState("2022");
  function FilterChange(filter) {
    yearChange(filter);
  }

  let filterYear = parseInt(selectYear);
  


  

  //note that below is an additional attempt that I have made:

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
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onFilterChange={FilterChange}
        ></ExpensesFilter>
        <ExpensesList filteredExpense={props.expense} a={filterYear}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
