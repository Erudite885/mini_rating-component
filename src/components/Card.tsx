import React from 'react'

interface cardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<cardProps> = ({ children, className }) => {
  const cardClasses = `card ${className || ''}`
  
  return (
      <div className={cardClasses}>{children}</div>
  )
}

export default Card