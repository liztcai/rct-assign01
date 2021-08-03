import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     inputTitle: "",
  //     inputAmount: "",
  //     inputDate: "",
  //   });

  function changedTitleHandler(event) {
    setInputTitle(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, inputTitle: event.target.value };
    // });
  }

  function changedAmountHandler(event) {
    setInputAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, inputAmount: event.target.value };
    // });
  }

  function changedDateHandler(event) {
    setInputDate(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, inputDate: event.target.value };
    // });
  }

  function submitHandler(event) {
    event.preventDefault();

    const newExpense = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    // const newExpense = {
    //   title: userInput.inputTitle,
    //   amount: userInput.inputAmount,
    //   date: new Date(userInput.inputDate),
    // };

    // console.log(newExpense);
    props.onSaveExpenseData(newExpense);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputTitle}
            onChange={changedTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={changedAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={changedDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
