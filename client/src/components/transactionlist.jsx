import React from "react";
import { Transaction } from "./transaction";

export const TransactionList = () => {
  const transactions = [
    {
      text: "some money ",
      amount: 123
    }
  ];
  return (
    <section className="transaction-list-section">
      <ul className="transaction-list_container">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </section>
  );
};
