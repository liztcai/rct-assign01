import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const { expenses } = props;
  const [selectedFilter, setSelectedFilter] = useState("2020");
   
  const selectFilterHandler = (filterYear) => {
    setSelectedFilter(filterYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        onSelectFilter={selectFilterHandler}
        selected={selectedFilter}
      />
      <Card>
        {expenses.map((expense) => (
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
