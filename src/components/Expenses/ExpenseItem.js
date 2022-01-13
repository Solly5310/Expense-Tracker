import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card.js"
import React from 'react';

function ExpenseItem(props) {
  

  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
