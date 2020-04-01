import React, { useEffect } from "react";
import { Transaction } from "./transaction";
import { getTransactions } from "../Redux/actions/transaction";
import { connect } from "react-redux";

const TransactionList = ({
  getTransactions,
  transaction: { transactions, loading }
}) => {
  useEffect(() => {
    getTransactions();
  }, [getTransactions]);
  return (
    <section className="transaction-list-section">
      <ul className="transaction-list_container">
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  transaction: state.transaction
});
export default connect(mapStateToProps, { getTransactions })(TransactionList);
