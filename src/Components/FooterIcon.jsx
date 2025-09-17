import React from 'react'
import { Link,useLocation } from 'react-router-dom'
const FooterIcon = ({ icon:Icon, className, title, to }) => {
  const defaultImage = "/assets/logo.svg" 
  const location = useLocation(); 
    
  const isActive = location.pathname === to

  return (
    <Link to={to} className={`flex flex-col items-center justify-center text-center ${isActive ? "bg-blue-950 p-2 rounded-xl" : "text-white"} 
          ${className}`}>  
        <div className="bg-blue-200 rounded-full p-2 flex items-center justify-center">
            {Icon ? (<Icon className=" text-blue-700" />) : (<img
                src={image ? `/assets/${image}` : defaultImage} 
                alt={title}
                className="w-8 h-8"
                onError={(e) => (e.currentTarget.src = defaultImage)}
            />
            )}
            

        </div>
        <h4 className="mt-1 text-xs text-white">{title}</h4>
       
    </Link> 
  )
}

export default FooterIcon