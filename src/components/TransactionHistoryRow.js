import React from "react";
const TransactionHistoryRow = ({type, amount, currency, id} ) => {

return (
    <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
)}

export default TransactionHistoryRow;