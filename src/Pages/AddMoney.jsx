
import React from 'react'
import WalletCard from '../Components/WalletCard'
import Card from '../Components/Card'


const AddMoney = () => {
  return (
    <div>
      <WalletCard />

      <Card className={'p-4'}>
        <p className='mb-3'>Make a deposit to these accounts for instant funding.</p>
        <ul className='text-center'>
          <h1 className='p-2 bg-blue-500 rounded-3xl select-all text-[22px]'>1127378990</h1>
          <h1>Mr.deeks</h1>
          <h1>Gtb</h1>
        </ul>
        
      </Card> 
    </div>
  )
}

export default AddMoney
