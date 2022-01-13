import Chart from "../Chart/Chart.js"
import React from 'react';

function ExpensesChart (props)
{
   let expensesDataPoints=[
      {label: "Jan", value: 0 , key: 1},
      {label: "Feb", value: 0 , key: 2},
      {label: "Mar", value: 0 , key: 3},
      {label: "Apr", value: 0 , key: 4},
      {label: "May", value: 0 , key: 5},
      {label: "Jun", value: 0 , key: 6},
      {label: "Jul", value: 0 , key: 7},
      {label: "Aug", value: 0 , key: 8},
      {label: "Sep", value: 0 , key: 9},
      {label: "Oct", value: 0 , key: 10},
      {label: "Nov", value: 0 , key: 11},
      {label: "Dec", value: 0 , key: 12}

   ]
   

   let maxValue = 0

   for(let x in props.expenses)
   {
      if(props.expenses[x].date.getFullYear() === props.a)
      {
         let month = props.expenses[x].date.getMonth()
         expensesDataPoints[month].value += props.expenses[x].price
         maxValue += props.expenses[x].price
      }
   }


   return <Chart dataPoints={expensesDataPoints} max = {maxValue} ></Chart>
}


export default ExpensesChart;