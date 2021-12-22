import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {

  function ExpenseSubmitted(expenses) {
    let expenseRecord = {
      ...expenses
    }
    console.log("Expense Received yup yup");
    console.log(expenseRecord);
  }
  let expenses = [
    {
      title: "Chocolate",
      price: 23.65,
      date: new Date(2021, 12, 2),
    },
    {
      title: "Candy",
      price: 13.24,
      date: new Date(2021, 12, 2),
    },
    {
      title: "Master Chief",
      price: 60.0,
      date: new Date(2021, 12, 3),
    },
    {
      title: "Pen",
      price: 2.0,
      date: new Date(2021, 12, 3),
    },
  ];
  return (
    <div>
      <NewExpense onExpenseSubmit={ExpenseSubmitted}></NewExpense>
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;
