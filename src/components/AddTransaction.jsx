import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  function submitTransaction(e) {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: Number(amount)
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export { AddTransaction };
