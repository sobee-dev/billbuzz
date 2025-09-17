import React from 'react'
import Transactions from '../Pages/Transactions';
import { transactionsList } from "../Data/TransactionData";


const RecentTransaction = () => {
  const heading ="Recent Transactions"
  const lastTwo = transactionsList.slice(-2);
  return (
    
     <div>
      <Transactions transactionsList={lastTwo} heading={heading}/>
     </div> 
    
    
  )
}

export default RecentTransaction
