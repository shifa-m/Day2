import React from 'react'
import { Star, TextAlignStart } from 'lucide-react'

const Left = () => {
return ( <div className='w-full lg:w-1/2 p-4 '>


  <div className='w-full rounded-3xl p-6 sm:p-10 bg-gray-400/20 shadow-lg lg:ml-[50%] lg:mt-[10%]'>

    {/* Services Button */}
    <button className='text-red-700 bg-white px-6 py-3 rounded-xl shadow cursor-pointer hover:scale-105 transition flex gap-2'>
      <Star /> Services
    </button>

    <div className='flex flex-col lg:flex-row gap-6 mt-8'>

      {/* Text Section */}
      <div className='lg:w-1/2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl'>
          End-to-End <br />
          <span>AI Services</span>
        </h1>

        <p className='text-sm sm:text-base mt-4'>
          We turn ambiguous AI ideas into production features your
          users trust—combining strategy, design engineering and
          evaluation.
        </p>
      </div>

      {/* Card */}
      <div className='lg:w-1/2 bg-gray-700/40 shadow rounded-3xl p-6 hover:scale-105 transition'>

        <h1 className='text-2xl sm:text-3xl flex justify-between'>
          AI Strategy <br /> & Mapping
          <TextAlignStart />
        </h1>

        <p className='text-sm mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className='flex flex-wrap gap-3 mt-6'>
          <button className='bg-gray-600/30 text-xs px-4 py-2 rounded-xl hover:bg-red-700 transition'>
            Stakeholder discovery
          </button>

          <button className='bg-gray-600/30 text-xs px-4 py-2 rounded-xl hover:bg-red-700 transition'>
            Value Model & definition
          </button>
        </div>

      </div>

    </div>

  </div>

</div>


)
}

export default Left
