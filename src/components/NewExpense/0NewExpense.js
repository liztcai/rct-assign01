import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";

function NewExpense(props) {
  const [newExpense, setNewExpense] = useState(
    <Button
      className="btn__center"
      title="Add New Expense"
      clicked={clickedHandler}
    />
  );

  function saveExpenseDataHandler(expenseData) {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  }

  function cancelClickedHandler() {
    setNewExpense(
      <Button
        className="btn__center"
        title="Add New Expense"
        clicked={clickedHandler}
      />
    );
  }

  function clickedHandler() {
    console.log("clicked");
    setNewExpense(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClickedHandler={cancelClickedHandler}
      />
    );
  }

  return <div className="new-expense">{newExpense}</div>;
}

export default NewExpense;
