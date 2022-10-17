import "./styles.css";
import Header from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { initialState, GlobalContext } from "./contexts/GlobalState";
import AppReducer from "./contexts/AppReducer";
import { useReducer } from "react";
export default function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state);
  // ACTIONS
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
    console.log(id);
  }

  function addTransaction(newTransaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction
    });
  }
  return (
    <div className="container">
      {/* <GlobalProvider> */}
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
        }}
      >
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        {/* </GlobalProvider> */}
      </GlobalContext.Provider>
    </div>
  );
}
