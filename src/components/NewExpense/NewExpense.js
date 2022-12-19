import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startEditingExpenseHandler = (event) => {
    setIsEditing(true);
  };

  const stopEditingExpenseHandler = (event) => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onstopEditingExpense={stopEditingExpenseHandler}
        />
      ) : (
        <button onClick={startEditingExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
