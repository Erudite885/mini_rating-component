import React, { useState } from 'react'
import Thankyou from './Thankyou'


const RatingComponent: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [rate, setRate] = useState<number | null>(null)
 
  // Rating handler
  const handleRating = (value: React.SetStateAction<number | null>) => {
    setRate(value)
  }

  //Submit handler
  const handleSubmit = () => {
    if (!rate) {
      alert('please select a rating')
      setSubmitted(false)
    } else {

      setSubmitted(true)
    }
  }

 

  return (
    <div className='bg-gray-800 rounded-2xl mx-4 p-6 max-w-[320px]'>
      {
        !submitted
          ?
          <div className='flex flex-col'>
        <div className='bg-gray-500 bg-opacity-25 rounded-full w-12 h-12 mb-4 flex justify-center items-center'>
          <img src="../../public/vite.svg" alt="rating_star-logo" className='w-6 h-6 object-contain'  />
        </div>
        <h2 className='font-bold text-xl md:text-2xl text-slate-200 py-2'>How did we do?</h2>
        <p className='text-sm md:text-lg text-slate-400 mb-4'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className=''>{[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            // bg-white py-[5px] px-[10px] rounded-full  ${rate === value ? 'bg-[#f0c040]' :''}`
            className={`${rate === value ? 'bg-orange-500 text-slate-100 bg-opacity-95 hover:bg-orange-500 ' : ''} m-[5px] text-xs sm:text-sm bg-gray-900 bg-opacity-70 text-slate-200 rounded-full hover:bg-gray-400 hover:text-slate-200 `}> {value}</button>
        ))}
        </div>
        <button onClick={handleSubmit} className='px-4 py-2 bg-orange-600 text-white border-none focus:outline-[0] hover:bg-slate-50 hover:text-orange-500 active:bg-slate-50 active:text-orange-500 mt-5 uppercase tracking-widest rounded-3xl'>Submit</button>
        </div>
        :
        <Thankyou rating={rate} />
      }
    </div>
  )
}

export default RatingComponent