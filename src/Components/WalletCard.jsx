import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function WalletCard() {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <>
      <Card className="bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-200 p-4">
        <div className="flex justify-between">
          <div>
            <p>Available Balance &gt; </p>
            <h2 className={`mt-2 text-[27px] font-bold ${showBalance ? "blur-0 " : "blur-sm select-none"}`}
                onClick={() => setShowBalance(!showBalance)}> &#8358;200,000.05 </h2>
            <p className="text-sm text-gray-500">(Click balance to {showBalance ? "hide" : "reveal"})
            </p>   
          </div>

          <div className="flex flex-col items-center gap-2">
            <Link to={'/transactions'}>Transaction History &gt; </Link>
            <Link to='/addmoney' className="p-2 px-1.5 mt-2 rounded-3xl bg-blue-600 text-white text-sm">
              Add Money
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}

export default WalletCard
