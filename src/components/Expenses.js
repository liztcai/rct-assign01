import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const { expenses } = props;
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
