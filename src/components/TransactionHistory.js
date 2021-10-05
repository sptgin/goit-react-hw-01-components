import React from 'react';
import TransactionHistoryRow from './TransactionHistoryRow';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TransactionHistoryRow
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            id={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
