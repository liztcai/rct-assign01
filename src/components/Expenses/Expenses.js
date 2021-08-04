import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const selectFilterHandler = (filterYear) => {
    setSelectedFilterYear(filterYear);
  };

  const filteredExpenses = props.items.filter(
    (exp) => exp.date.getFullYear().toString() === selectedFilterYear
  );
  
  return (
    <div className="expenses">
      <ExpensesFilter
        onSelectFilter={selectFilterHandler}
        selected={selectedFilterYear}
      />
      <Card>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
