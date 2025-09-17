import React from 'react'

const SingleProduct = ({className,name,price,description,onClick}) => {
  return (
    <button type='button' onClick={onClick}>
      <div className={`m-2 text-center border-0.5 bg-blue-100 rounded-lg shadow-sm shadow-blue-400 cursor-pointer ${className}`}>
        <div className='flex flex-col space-2'>
          <h2 className='pb-1'>{name}</h2>
          <p className='text-[9px] mb-1'>&#8358;{price}</p>
          <p className='text-xs text-gray-600'>{description}</p>
        </div>
      </div>
    </button> 
  )
}

export default SingleProduct
