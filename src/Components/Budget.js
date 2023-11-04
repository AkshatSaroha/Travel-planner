import React, { useState } from 'react';
import '../Styles/budget.css';

function ExpenseTracker() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [expensesList, setExpensesList] = useState([]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleAddExpense = () => {
    if (description && amount) {
      setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);
      setExpensesList([...expensesList, { description, amount }]);
      setDescription('');
      setAmount('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddExpense();
    }
  };

  return (
    <div className='expence-tracker'>
      <h2 style={{fontWeight:"bold"}}>Expense Tracker</h2>
      <div className='input-fields'>
        <input
          type="text"
          placeholder="Expense description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          type="number"
          placeholder="Enter an amount"
          value={amount}
          onChange={handleAmountChange}
          onKeyDown={handleKeyDown}
        />
        <button id="btnn" onClick={handleAddExpense}>Add Expense</button>
        <br/>
        <div style={{fontWeight:"bold", fontSize:"22px"}}>
          Total Amount: <span>{totalAmount}</span>
        </div>
        <br/>
        <div>
          <h4 style={{fontWeight:"bold"}}>Expenses List</h4>
          <ul>
            {expensesList.map((expense, index) => (
              <li key={index}>
                <span>{expense.description}:</span>
                <span>{expense.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
