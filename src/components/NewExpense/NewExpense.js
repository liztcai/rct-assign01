import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(expenseData) {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  }

  function cancelClickedHandler() {
    setIsEditing(false);
  }

  function clickedHandler() {
    setIsEditing(true);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <Button
          className="btn__center"
          title="Add New Expense"
          clicked={clickedHandler}
        />
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClickedHandler={cancelClickedHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
