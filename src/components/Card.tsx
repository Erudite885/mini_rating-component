import React from 'react'

const Card: React.FC = ({ children }:React.PropsWithChildren) => {
  return (
      <div className='bg-gray-800 rounded-2xl mx-4 p-6'>{children}</div>
  )
}

export default Card