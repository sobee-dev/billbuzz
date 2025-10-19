import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MainLayout from './Layouts/MainLayout'
import NotFound from './Pages/NotFound'
import AddMoney from './Pages/AddMoney'
import Transactions from './Pages/Transactions'
import Support from './Pages/Support'
import Profile from './Pages/Profile'
import Airtime from './Pages/Airtime'
import Data from './Pages/Data'

import Cac from './Pages/Cac'
import Electricity from './Pages/Electricity'
import Tv from './Pages/Tv'
import Receipt from "./Pages/Receipt";
import Login from './Pages/Login'
import Register from './Pages/Register'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addmoney" element={<AddMoney />} />
          
          <Route path="support" element={<Support />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="airtime" element={<Airtime />} />
          
          <Route path="cac" element={<Cac />} />
          <Route path="electricity" element={<Electricity />} />
          <Route path="tv" element={<Tv />} />
          <Route path="data" element={<Data />} />
        </Route>
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
    </>    
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App



