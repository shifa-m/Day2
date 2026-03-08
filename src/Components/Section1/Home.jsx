import React from 'react'
import Navbar from './Navbar'
import Right from './Right'
import Left from './Left'

const Home = () => {
  return (
    <div className='h-screen w-full  '>
      <div className='h-full w-full '>
        <Navbar />
        <div className='flex  h-[85%]'>
          <Right />
          <Left />
        </div>

      </div>
    </div>
  )
}

export default Home


// https://images.pexels.com/photos/29788906/pexels-photo-29788906.jpeg
// https://images.pexels.com/photos/29818711/pexels-photo-29818711.jpeg