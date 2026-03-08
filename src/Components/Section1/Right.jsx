import React from 'react'
import { Users } from 'lucide-react';
import { UserStar } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

const Right = () => {
      return (
            <div className='h-full w-1/2 p-10  text-white '>
                  <div className='border-2 border-none bg-gray-700/40 transition-transform duration-300 hover:scale-110 hover:bg-red-600 cursor-pointer h-10 w-40 rounded-full flex items-center justify-center'>
                        <button>AiDriven Agency</button>
                  </div>


                  <div className='flex '>
                        <h1 className='text-6xl mt-8'>Your AI </h1>
                        <h2 className='text-xl mt-8 pl-4'>from date <br />to launch</h2>

                  </div>
                  <div className='text-6xl mt-6'>
                        <h1 >Sprint Team </h1>
                        <h1 className='mt-6'>On Demand</h1>
                  </div>
                  <div className='mt-6'>
                        <h1 className='text-xl'>From discovery to deployment ,we plug into your stack
                              <br />
                              to prototype validation and launch AI experiences your <br />
                              Users actually love. </h1>
                        <div className='mt-8 '>
                              <button className='border-2 rounded-2xl p-3 bg-gray-700/40 border-none transition-transform duration-300 hover:scale-110 hover:bg-red-600  mr-10'>Explore Service</button>
                              <button className='border-2 rounded-2xl p-3 bg-gray-700/40 border-none transition-transform duration-300 hover:scale-110 hover:bg-red-600    mr-10'> view Pricing Plars</button>
                        </div>


                  </div>
                  <div className='flex gap-10'>
                        <div className='border-2 h-40 w-50 rounded-3xl mt-10  bg-red-500/15 border-none mr-6 pb-3 transition-transform duration-300 hover:scale-105 cursor-pointer shadow-xs shadow-gray-400 '>
                              <h1 className='p-2 '>Happy People</h1>
                              <h1 className='text-4xl p-2 pt-12 flex gap-20'>3L+ <Users className='mt-2 h-10 w-6'/></h1>
                        </div>
                         <div className='border-2 h-40 w-50 rounded-3xl mt-10  bg-red-500/15 border-none mr-6 pb-3 transition-transform duration-300 hover:scale-105 cursor-pointer shadow-xs shadow-gray-400'>
                              <h1 className='p-2 '>Happy People</h1>
                              <h1 className='text-4xl p-2 pt-12 flex gap-20 '>95% <UserStar className='mt-2 h-10 w-6' /></h1>
                        </div>
                         <div className='border-2 h-40 w-50 rounded-3xl mt-10  bg-red-500/15 border-none mr-6 pb-3 transition-transform duration-300 hover:scale-105 cursor-pointer shadow-xs shadow-gray-400'>
                              <h1 className='p-2 '>Happy People </h1>
                              <h1 className='text-4xl p-2 pt-12 flex gap-20'>88%  <ArrowUpRight className='mt-2 h-10 w-6'/></h1>
                        </div>
                  </div>

            </div>
      )
}

export default Right
