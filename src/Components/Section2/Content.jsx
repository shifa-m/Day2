import React from 'react'
import LeftSection from './LeftSection'
import RightUpper from './RightUpper'

const Content = () => {
  return (
    <div className='min-h-screen w-full px-4 sm:px-6 md:px-10'>

      {/* Top Heading */}
      <div className='text-white flex justify-center lg:justify-end mt-4'>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl lg:mr-10 text-center lg:text-right'>
          We <span className='text-red-600'>design</span> and deploy <span className='text-red-600'>AI solutions</span>
          <br />
          with people at the core, ensuring
          <br />
          every <span className='text-red-600'>system enhances</span> real user
          <br />
          experiences.
        </h1>
      </div>

      {/* Sections */}
      <div className='flex flex-col lg:flex-row gap-6 mt-10'>

        <LeftSection />
        <RightUpper />

      </div>

    </div>
  )
}

export default Content