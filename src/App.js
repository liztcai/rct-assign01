import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 20),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.27,
    date: new Date(2020, 2, 20),
  },
  {
    id: "e3",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2020, 2, 20),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 2, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(newExpense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
