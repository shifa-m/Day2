import React from 'react'

const RightUpper = () => {
  return (
    <div className=' h-full w-1/2 text-white m-9  rounded-4xl shadow-[0px_-3px_6px_2px_black] cursor-pointer transition-transform duration-300 hover:scale-105'>
      <div className='text-white  text-xl flex justify-center pt-3'>
        <h1>Trusted by 120+ clients across 4 industries shipping <br />
          AI from idea to production in 8-10 weeks .</h1>
      </div>
      <div className='text-red-600 text-9xl flex justify-end mt-4 pr-40 cursor-pointer transition-transform duration-300 hover:scale-105'>
        <h1>120+</h1>
      </div>
      <div className='shadow-[0px_-3px_0px_1px_black] h-[55%] w-[80%] m-15 rounded-4xl flex cursor-pointer transition-transform duration-300 hover:scale-105'>
        <div className=' h-[80%] w-[35%]  m-10 '>
       <img src="https://i.pinimg.com/736x/02/ef/1c/02ef1ca5de40e8cdb03ec503b07cae30.jpg" className=' rounded-2xl shadow-2xs shadow-gray-500 cursor-pointer transition-transform duration-300 hover:scale-105' alt="" />
        </div>
        <div className='flex flex-col m-5'>
          <h1 className='text-xl'><span className='text-red-600 text-9xl font-serif'>"</span><span></span>Good AI obvious-because the <br /><span className='ml-13'>hard work is hidden.</span></h1>
         
          <div className=' mt-8 pl-12'>Ava Cellina | AgentAI's Design Lead</div>
        </div>
      </div>
    </div>
  )
}

export default RightUpper
