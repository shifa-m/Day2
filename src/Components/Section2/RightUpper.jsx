import React from 'react'

const RightUpper = () => {
  return (
    <div className='w-full lg:w-1/2 text-white p-6 sm:p-8 rounded-3xl shadow-lg
    cursor-pointer transition-transform duration-300 hover:scale-105'>

      <div className='text-center text-sm sm:text-base lg:text-lg'>
        Trusted by 120+ clients across 4 industries shipping
        AI from idea to production in 8-10 weeks.
      </div>

      <div className='text-red-600 text-5xl sm:text-7xl lg:text-8xl font-bold
      flex justify-center lg:justify-end mt-6'>
        120+
      </div>

      <div className='bg-gray-800/20 rounded-3xl mt-8 p-4 flex flex-col sm:flex-row gap-4'>

        <img
          src="https://i.pinimg.com/736x/02/ef/1c/02ef1ca5de40e8cdb03ec503b07cae30.jpg"
          className='w-full sm:w-40 rounded-2xl'
          alt=""
        />

        <div className='flex flex-col justify-center'>
          <h1 className='text-lg sm:text-xl'>
            <span className='text-red-600 text-5xl font-serif'>" </span>
            Good AI obvious—because the hard work is hidden.
          </h1>

          <div className='mt-4 text-sm text-gray-300'>
            Ava Cellina | AgentAI's Design Lead
          </div>
        </div>

      </div>

    </div>
  )
}

export default RightUpper