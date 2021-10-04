import React from 'react';
import TransactionHistoryRow from './TransactionHistoryRow';

const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
