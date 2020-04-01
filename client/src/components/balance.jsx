import React from "react";
import { connect } from "react-redux";

const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts);
  const total = amounts.reduce((prev, cur) => (prev += cur), 0);
  return (
    <div>
      <div>
        <h2 className="input-section_title">Your available budget is</h2>
        <h2 className="input-section_money">${total}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  transactions: state.transaction.transactions
});

export default connect(mapStateToProps)(Balance);
