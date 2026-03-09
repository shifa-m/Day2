import React from 'react'

const LeftSection = () => {
  return (
    <div className='w-full lg:w-1/2 bg-gray-600/20 p-6 sm:p-8 rounded-3xl shadow-lg
    cursor-pointer transition-transform duration-300 hover:scale-105'>

      <div className='flex justify-center'>
        <h2 className='text-white text-sm sm:text-base bg-gray-600/20 px-6 py-2 rounded-full
        hover:bg-red-600 transition'>
          Available for worldwide project
        </h2>
      </div>

      <div className='flex justify-center mt-6 text-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>
          Based in <span className='text-red-700'>Montreal, Canada</span>
        </h1>
      </div>

      <div className='flex justify-center mt-6'>
        <button className='bg-black/40 px-6 py-3 rounded-full text-white font-bold
        hover:bg-red-600 transition'>
          Start a Project
        </button>
      </div>

      <div className='mt-8 flex justify-center'>
        <img
          src="https://i.pinimg.com/1200x/42/ff/e7/42ffe7fda955fe482bda7d5fb14adc0e.jpg"
          className='w-full max-w-md rounded-3xl hover:scale-105 transition'
          alt=""
        />
      </div>

    </div>
  )
}

export default LeftSection