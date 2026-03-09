import React from 'react'
import Right from './Right'
import Left from './Left'
import { BellRing, IdCard, Activity } from 'lucide-react'

const Header = () => {
return ( <div className='min-h-screen w-full bg-black mt-16 pt-10 text-white font-bold px-4 sm:px-6 md:px-10'>

  {/* Top Brands */}
  <div className='w-full min-h-[100px] flex flex-wrap items-center justify-between gap-6 shadow-[0px_-2px_5px_0px_gray] rounded-2xl p-6'>

    <h1 className='cursor-pointer hover:scale-105 transition'>
      Trusted by 100+ <br /> Top-tier brands
    </h1>

    <h1 className='flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl hover:scale-105 transition'>
      <BellRing /> Logoipsum
    </h1>

    <h1 className='flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl italic hover:scale-105 transition'>
      <Activity /> LOGOIPSUM
    </h1>

    <h1 className='flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-serif hover:scale-105 transition'>
      <IdCard /> Logoipsum
    </h1>

  </div>

  {/* Sections */}
  <div className='flex flex-col lg:flex-row gap-6 mt-10'>
    <Left />
    <Right />
  </div>

</div>


)
}

export default Header
