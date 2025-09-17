import React from 'react'
import { Link } from 'react-router-dom';

const MenuIcon = ({className,title,image,icon:Icon,to}) => {
  const defaultImage = "public/assets/logo.svg";
  return (
    <>
      <Link to={to}>
        <div className= {`flex flex-col p-4 items-center justify-center text-center ${className}`}>  
          <div className="bg-blue-200 rounded-full p-2 flex items-center justify-center">
            {Icon ? (<Icon className=" text-blue-700 text-[30px]" />) :
            <img src={image ? `/assets/${image}` : defaultImage} 
              alt={title} 
              className='w-8 h-8'
              onError={(e) => (e.currentTarget.src = defaultImage)}  
            />}
          </div>
          <h4 className=' text-sm mt-2'>{title}</h4>
        </div>
      </Link> 
    </>
  )
}

export default MenuIcon
