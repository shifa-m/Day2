import React from 'react'
import LeftSection from './LeftSection'
import RightUpper from './RightUpper'


const Content = () => {
  return (
    <div className='h-screen w-full ]'>
      <div className='text-white flex justify-end  '>
        <h1 className='font-bold text-4xl mr-10 mt-2'>We <span className='text-red-600'>design</span> and deploy <span className='text-red-600'>AI soloutions</span><br />
          with peoplw at the core , ensuring <br />every <span className='text-red-600'>system enhances </span>real user <br />experiences.</h1>
      </div>
      <div className='flex h-[75%] '>
        <LeftSection />
        <RightUpper />

      </div >


    </div>


  )
}

export default Content
