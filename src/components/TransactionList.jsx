import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { Transaction } from "./Transaction";
function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </div>
  );
}

export { TransactionList };
