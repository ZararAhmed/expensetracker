import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.length ? <>
          { transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction} />)) }
        </> : <li>No Transactions yet</li>
        }

      </ul>
    </>
  )
}
export default TransactionList;