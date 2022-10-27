import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import dummyExpenses from "./dummyData/expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const App = () => {
  const [expensesData, setExpensesData] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpensesData((prevExpensesData) => {
      return [expense, ...prevExpensesData];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesData} />
    </div>
  );
};

export default App;
