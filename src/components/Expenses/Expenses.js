import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const selectFilterHandler = (filterYear) => {
    setSelectedFilterYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === selectedFilterYear
  );
  return (
    <div className="expenses">
      <ExpensesFilter
        onSelectFilter={selectFilterHandler}
        selected={selectedFilterYear}
      />
      <Card>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
