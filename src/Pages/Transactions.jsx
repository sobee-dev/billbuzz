import React from 'react'
import { transactionsList as alltransactionsList } from "../Data/TransactionData";
import Card from '../Components/Card';


const Transactions = ({transactionsList=alltransactionsList,heading}) => {
  const defaultHeading = "Transaction History";

  return (
    <div>
      <Card>
        <h4 className="mt-3 px-3 bg-blue-200 font-semibold">{heading ?? defaultHeading}</h4>
      {transactionsList.map((transact)=>(
      <div className='flex justify-between items-center px-3'>
        <div className='flex flex-col text-left'>
            <h5 className='text-[12px]'>
                {transact.title}
            </h5>
            <p className='text-[10px] text-gray-600'>{transact.date_time}</p>
        </div>
        <div className='flex flex-col text-right'>
            <h4 className='text-[12px]'>&#8358;{transact.amount}</h4>
            <p className='bg-blue-100 rounded-2xl text-[10px] p-1'>{transact.status}</p>
        </div>

      </div>
      ))}
      </Card>
    </div>
  )
}

export default Transactions
