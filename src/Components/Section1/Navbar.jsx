import React from 'react'
import { HatGlasses } from 'lucide-react';
import { Menu } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='text-white flex justify-between '>
      <div className='text-2xl px-5 py-4'>
        <button className='cursor-pointer transition-transform duration-300 hover:scale-110 flex gap-2'><HatGlasses className='mt-2'/>AgentAI</button>

      </div>
      <div className=' border-2 rounded-full flex  mx-4 my-4 py-2 px-4 gap-6 flex-wrap items-center  bg-gray-700/30 font-bold  border-none transition-transform duration-300 hover:scale-110  hover:shadow-red-700/60 hover:shadow-lg transition  '>
        <a href="#" className='cursor-pointer  rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700 '>Home</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>Services</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>Works</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>About</a>
        <a href="#" className='cursor-pointer rounded-full py-2 px-4 transition-transform duration-300 hover:bg-red-700'>Contact</a>
      </div>
      <div className=' px-4 py-4 cursor-pointer transition-transform duration-300 hover:scale-105'>
        <button className=" px-7 py-2 rounded-full mr-3 bg-red-700 border-none flex gap-2">Menu<Menu className='mt-1 h-5' />
</button>
      </div>

    </div>
  )
}

export default Navbar
