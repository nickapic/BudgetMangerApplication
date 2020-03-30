import React from "react";

export const IncomeExpense = () => {
  return (
    <div>
      {" "}
      <div className="incomecontainer">
        <h3 className="containertext">Income</h3>
        <h3 className="containervalue">$162</h3>
      </div>
      <div className="expensecontainer">
        <h3 className="containertext">Expense</h3>
        <h3 className="containervalue">-$250</h3>
      </div>
    </div>
  );
};
