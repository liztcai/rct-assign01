import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
      date: new Date(2021, 2, 20),
    },
    {
      id: "e3",
      title: "New Tv",
      amount: 799.49,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 2, 20),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} /> 
    </div>
  );
}

export default App;
