import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => {
    return transaction.amount;
  });

  const total = amount
    .reduce((preValue, currentValue) => preValue + currentValue, 0)
    .toFixed(2);

  return (
    <div>
      <h4>Balance</h4>
      <h1 className={total > 0 ? "plus" : "minus"}>{total}</h1>
    </div>
  );
}
export { Balance };
