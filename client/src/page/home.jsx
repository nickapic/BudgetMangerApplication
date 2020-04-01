import React from "react";
import Balance from "../components/balance";
import IncomeExpense from "../components/incomexpense";
import AddItem from "../components/additem";
import TransactionList from "../components/transactionlist";

export const Home = () => {
  return (
    <div className="main-container">
      <div className="input-section">
        <Balance />
        <IncomeExpense />
        <AddItem />
      </div>
      <div className="transaction-section">
        <TransactionList />
      </div>
    </div>
  );
};
