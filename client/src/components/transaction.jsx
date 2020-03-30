import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li className="transaction-list_item">
      <h4 className="transaction-list_item-text">{transaction.text}</h4>
      <h4 className="transaction-list_item-amount">{transaction.amount}</h4>
    </li>
  );
};
