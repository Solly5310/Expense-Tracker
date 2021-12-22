import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card.js"
import {useState} from 'react';

function ExpenseItem(props) {
  let [title, titleState] = useState(props.title)

  function clickHandler() {
    titleState("updated!")
  }
  
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$2{props.price}</div>
      </div>
      <button onClick={clickHandler}>Click Me!</button>
    </Card>
  );
}

export default ExpenseItem;
