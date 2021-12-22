import "./ExpenseDate.css";
import Card from "./Card.js.js"


function ExpenseDate(props) {
  let year = props.date.toLocaleString("en-US", { year: "numeric" });
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <Card className="expense-date">
      <div className = "expense-date__year">{year}</div>
      <div className = "expense-date__month">{month}</div>
      <div className = "expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
