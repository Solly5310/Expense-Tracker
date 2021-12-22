import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "./Card.js.js"


function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$2{props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
