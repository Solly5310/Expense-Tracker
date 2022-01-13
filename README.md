# Expense-Tracker

 # Developer Notes
 
 **Overview**
 * This was my first project made using React!
 * The application initially displays fixed transactions that can be viewed based on each year that they were made
 * The user then has the option to enter in new expenses that are automatically filtered
 * A graph visualises the total monthly transactions in comparison to the total yearly transactions
 
 ## Application Design
 * Each specifc aspect of the expense tracker is compartmentalised
  * This helps to reduce repitition of code
 * So that the expense tracker dynamically takes in new expenses, expense data is passed down into each component and then brought back up to the root App.js component
  * Each new user input is then rendered on screen instantly, avoiding a total refresh of the application at each instance
 * To further reduce repitition of code, the Card.js component is utilised to ensure that styling is consinstently applied
  
 ## Further Actions
 * This application is a first draft so to speak it requires the user to have a React dev kit installed on their local machine
 * An optimal stage involves having a user start their own personal instance by accessing it online, which can be stored with further additions over time
 * Another goal is to connect with Up Bank's open API so that the a users transaction list for each year is displayed on screen, with further transaction analysis occuring over time
 
 
 
