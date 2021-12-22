import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card.js"
import ExpensesFilter from "./ExpensesFilter.js"
import {useState} from 'react';

function Expenses(props) {
  let [selectYear,yearChange] = useState('2022');
  function FilterChange(filter) {
    yearChange(filter)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectYear} onFilterChange={FilterChange}></ExpensesFilter>
        <ExpenseItem
          title={props.expense[0].title}
          price={props.expense[0].price}
          date={props.expense[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expense[1].title}
          price={props.expense[1].price}
          date={props.expense[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expense[2].title}
          price={props.expense[2].price}
          date={props.expense[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expense[3].title}
          price={props.expense[3].price}
          date={props.expense[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
