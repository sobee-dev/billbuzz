import React from 'react'
import AddsCard from '../Components/AddsCard'
import { Link } from 'react-router-dom'
const Cac = () => {
  return (
    <div className='pb-10'>
      <AddsCard />
      <div className=' py-6 mt-6 space-x-5'>
        <img src="assets/cac1.jpg" className='h-22 w-full rounded-2xl' alt="" />
        
      </div>

      <h2 className='text-[20px] font-bold mb-1'>Register your: </h2>
      <div class="relative  rounded-3xl overflow-hidden">
        <img src="assets/office.jpg" alt="" class="w-full h-full object-cover" />
        
        <div class="absolute inset-0 bg-blue-700/80 flex items-center justify-center">
          <ul class=" text-yellow-200 text-[20px] font-bold text- text-base space-y-3 p-3">
            <li>Business Name (BN)</li>
            <li>Company Registration(RC)</li>
            <li>Non-Governmental Organizations (NGOs) e.g. Friends Club, Churches and charity organizations</li>
            <li>Trademarks</li>
            <li>Filing of Annual tax returns</li>
          </ul>
        </div>
      </div>
      <h1 className='text-[24px] my-3 italic text-center text-blue-950'>Do you have questions??</h1> 
      
      <div className='text-center'>
      <Link to='https://wa.me/2349136435116?text=Hello%20I%20am%20interested%20in%20registering%20a%20business......' className=' mt-3 p-2 px-3 w-1/2 mx-auto text-white font bold rounded-xl text-[25px] bg-blue-500 border border-yellow-200'>Contact Us</Link>     
        <h1 className=' my-3 text-[20px]'>For free consultations!!!</h1> 
        <h1 className='mb-6 text-blue-900 font-bold'>Provide neccessary business information, and your Business documents will be delivered to you doorstep within the shortest period</h1>    
      </div>
    </div>
  )
}

export default Cac
