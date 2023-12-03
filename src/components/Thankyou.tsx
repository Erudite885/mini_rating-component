import React, { useEffect } from 'react'

interface ThankyouProps {
  rating: number | null;
}

const Thankyou: React.FC<ThankyouProps> = ({ rating }) => {
 
  // Thankyou redirection time out
  useEffect(() => {
    const thankyouTimeout = setTimeout(() => {
      window.location.href = '/'
    }, 3000);

    return () => clearTimeout(thankyouTimeout)
  },[])

  return (
   
      <div className='flex flex-col items-center '>
        <div className='bg-gray-500 bg-opacity-25 rounded-full w-12 h-12 mb-4 flex justify-center items-center'>
          <img src="../../vite.svg" alt="rating_star-logo" className='w-6 h-6 object-contain'  />
        </div>
        <span className='text-xs text-orange-400 bg-black bg-opacity-30 px-2 m-4 rounded-2xl'>You selected {rating} out of 5</span>
        <h2 className='font-bold text-xl md:text-2xl text-slate-200 py-2'>Thank You!</h2>
        <p className='max-w-[320px] text-[10px] md:text-lg text-slate-400 mb-4 text-center'>We appreciate you taking the time to give a rating.<br/> If you ever need more support, don't hesitate to get in touch! </p>
      </div>
  )
}

export default Thankyou