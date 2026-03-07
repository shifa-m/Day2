import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between '>
      <div className='text-2xl px-5 py-4'>
        <button className='cursor-pointer transition-transform duration-300 hover:scale-110'>AgentAI</button>

      </div>
      <div className=' border-2 rounded-full flex  justify-center items-center mx-6 my-6 py-2 px-4 gap-10 bg-gray-500/70 font-bold  border-none transition-transform duration-300 hover:scale-110  hover:shadow-red-700/60 hover:shadow-lg transition  '>
        <a href="#" className='cursor-pointer  rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700 '>Home</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>Services</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>Works</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>About</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>Contact</a>
      </div>
      <div className='text-xl px-4 py-4 cursor-pointer transition-transform duration-300 hover:scale-110'>
        <button className=" px-7 py-2 rounded-full mr-3 bg-red-700 border-none">Menu</button>
      </div>

    </div>
  )
}

export default Navbar
