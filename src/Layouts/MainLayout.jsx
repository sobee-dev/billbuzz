import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footerbar from '../Components/Footerbar'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className=" p-4">
        <Outlet />
      </div>
        
      <Footerbar />
    </div>
  )
}

export default MainLayout
