import React from 'react'

import AddsCard from './AddsCard'
import ServicesCard from './ServicesCard' 
import WalletCard from './WalletCard'
import Card from './Card'
import RecentTransaction from './RecentTransaction'

const HomeCards = () => {
  return (
    <>
        <WalletCard />

        <RecentTransaction />

        <Card>          
            <ServicesCard />
        </Card>
        <AddsCard className="mb-20"/>
        

      
    </>
  )
}

export default HomeCards
