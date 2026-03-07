import React from 'react'

const LeftSection = () => {
  return (
    <div className='h-full w-1/2 bg-mist-800/50 p-10 rounded-4xl m-10  shadow-[0_-4px_10px_rgba(0,0,0,0.15),0_4px_10px_gray]'>

      <div className='flex justify-center font-bold text-white '>
        <h2 className='border-1 border-white rounded-full   h-12 w-[35%] flex justify-center pt-2'> Available for worldwide project</h2>
       </div>
        <div className='flex justify-center mt-5'>
       <h1 className='text-4xl font-bold text-white'>Based in <span className='text-red-700'>Montreal , Canada</span></h1>
        </div>
        <div className='flex justify-center mt-5 '>
      <button className='bg-gray-700 h-12 w-40 rounded-full text-white font-bold shadow-black shadow-xl'>Start a Project</button>
  
        </div>
       
      
            
      <div className='bg-gray-600 h-[60%] mt-10 rounded-3xl '>l</div>
    </div>
  )
}

export default LeftSection
