import React from 'react'

const Card = ({children,className}) => {
  return (
    <div className={`bg-gray-100 rounded-lg my-4 shadow-xs ${className}`}>
      {children}
    </div>
  )
}

export default Card
