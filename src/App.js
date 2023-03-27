import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];


  return (
    <div>
      <h1>Udemy React Course</h1>
      <a href="https://www.https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595444#overview">Left Off: Start of Section 4: Lesson 45</a>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
