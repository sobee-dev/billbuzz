import React from 'react'
import Card from './Card'

function SwitchBtns({items, active, setActive, defaultImage, className}) {
    
  return (
    
        <div className= 'flex space-x-2 justify-around mt-10 mx-15 text-center'>
            
           {items.map((item,index) =>(
                <div key={index} onClick={() => setActive(item.boxId || item)} className={`rounded-xl ${className} shadow-md cursor-pointer w-10 h-10 overflow-hidden ${
                    active === (item.boxId || item) ? "shadow-blue-500 shadow-xl border-b-3 border-1 border-blue-600 " : "bg-gray-200"} `}>
                    
                    {item.image ? (<img src={item.image ? `/assets/${item.image}` : defaultImage}
                      className="w-full h-full" />) : (<span className='text-[12px]'>{item.boxId || item}</span> )}
                </div>
            ))}
        </div>
        
    
  )
}

export default SwitchBtns
