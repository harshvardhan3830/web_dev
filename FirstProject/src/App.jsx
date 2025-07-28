import React from 'react'
import AddExpensesForm from './components/AddExpensesForm'

const App = () => {
  const [expenses, setExpenses] = React.useState([]);

  console.log("Expense are ===>>>> ", expenses)
  return (
    <div className=' bg-slate-800 text-white w-screen h-screen flex items-center  flex-col'>
      <h1 className='text-3xl font-bold'>Expense Tracker</h1>
      <AddExpensesForm setExpenses={setExpenses} />
    </div>
  )
}

export default App