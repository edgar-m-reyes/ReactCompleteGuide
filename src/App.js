import Expenses from './components/Expenses/Expenses';
import expensesData from './dummyData/expenses';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
