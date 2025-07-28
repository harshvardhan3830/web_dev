import  { useState } from "react";

const AddExpensesForm = ({ setExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState( new Date() )

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = {
        title: title,
        amount: amount,
        date: date
    }

    setExpenses((prev) => [value , ...prev])
    setTitle("")
    setAmount("")
  }
  return (
    <div>
      <form className="bg-gray-700 p-4 rounded-lg w-96" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-2">Add New Expense</h2>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input type="text" className="border p-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Amount</label>
          <input type="number" className="border p-2 w-full" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Expense Date</label>
          <input type="date" className="border p-2 w-full" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpensesForm;
