import React from 'react'

const Left = () => {
  return (
    <div className='h-full w-1/2  flex flex-row gap-[12%] '>
      <div className='border-2 border-amber-50 h-70 w-60 rounded-3xl mt-[30%] ml-[30%]'></div>
      <div className='flex  flex-col justify-end text-white '>
        <div className='border-2 border-amber-50 h-[45%] w-70 rounded-3xl bg-red-500/25 border-none mr-6 pb-3 transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <div className='m-3 h-[95%] w-[90%] rounded-2xl p-3 bg-[url(https://i.pinimg.com/736x/f0/b1/af/f0b1af6bbd87da2ad46fe96e2d88a7ba.jpg)] bg-cover'>
        <h1 className='flex justify-between text-xl '>AgentAi <span>01:04</span></h1>
        <h1 className='mt-[78%] font-bold text-4xl'>230+</h1>
        <h1>Projects sucessfully delivered .</h1>
        </div>
        </div>
        <div className='border-2 border-amber-50 h-70 w-60 rounded-3xl bg-red-500/25 mt-5 p-3 w-[93%] border-none transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <h1 className='text-4xl pl-3'>400+ <br /><span className='text-xl'>Trusted People</span></h1>
        <button className='bg-red-600 px-10 py-1 rounded-4xl mt-30 ml-12 transition-transform duration-300 hover:scale-110 cursor-pointer'>Book Now</button>
        
        </div>
      </div>

    </div>
  )
}

export default Left
