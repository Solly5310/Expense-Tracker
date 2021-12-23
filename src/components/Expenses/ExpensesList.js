import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

function ExpensesList (props) {

   let filteredExpense = props.filteredExpense.filter(expense => {return expense.date.getFullYear() === props.a; });

   if(filteredExpense.length === 0){
      return (<div className = "expenses-list__fallback">No expenses in this Year Buddy</div>)
   }
   if(filteredExpense.length > 0)
   {
     return (<ul className = "expenses-list"> {filteredExpense.map((expense) => (
      
         <ExpenseItem 
            title={expense.title}
            price={expense.price}
            date={expense.date}
            key={expense.id}
         />
       
     ))
   }</ul>)
   }


 } export default ExpensesList;