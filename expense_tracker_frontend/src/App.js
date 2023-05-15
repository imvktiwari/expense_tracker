import React, { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
const dummyExpenses = [

];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]);This can be also used to do that.
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
