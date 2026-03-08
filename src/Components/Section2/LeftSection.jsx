import React from 'react'

const LeftSection = () => {
  return (
    <div className='h-full w-1/2 bg-gray-600/20 p-10 rounded-4xl m-10  shadow-[0_-4px_10px_rgba(0,0,0,0.15),0_4px_10px_black
    ] cursor-pointer transition-transform duration-300 hover:scale-105'>

      <div className='flex justify-center font-bold text-white '>
        <h2 className='border-none shadow-gray-400 shadow-2xs bg-gray-600/20 border-white rounded-full   h-12 w-[35%] flex justify-center pt-2 cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-red-600'> Available for worldwide project</h2>
       </div>
        <div className='flex justify-center mt-5'>
       <h1 className='text-4xl font-bold text-white'>Based in <span className='text-red-700'>Montreal , Canada</span></h1>
        </div>
        <div className='flex justify-center mt-5 '>
      <button className='bg-black/40 h-12 w-40 rounded-full text-white font-bold shadow-gray-700 shadow-xs cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-red-600'>Start a Project</button>
  
        </div>
       
      
            
      <div className=' h-[65%]  mt-10 ml-30 '>
        <img src="https://i.pinimg.com/1200x/42/ff/e7/42ffe7fda955fe482bda7d5fb14adc0e.jpg " className='bg-cover h-[100%] w-[85%]  rounded-3xl cursor-pointer transition-transform duration-300 hover:scale-105' alt="" />
      </div>
    </div>
  )
}

export default LeftSection
