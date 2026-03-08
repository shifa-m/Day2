import React from 'react'
import { Star } from 'lucide-react';
import { TextAlignStart } from 'lucide-react';


const Left = () => {
  return (
    <div className='w-full h-[75%] rounded-4xl m-10 '>
      <div className='h-full w-[95%]  rounded-4xl p-20 bg-gray-400/20 shadow-2xs shadow-gray-400 '>
         <button className='text-red-700 bg-white px-7 py-3 rounded-2xl shadow-2xs cursor-pointer transition-transform duration-300 hover:scale-105 flex gap-2'> <Star />Services</button>
         <div className='h-[90%] flex flex-row cursor-pointer transition-transform duration-300 hover:scale-105'>
          <h1 className='text-5xl mt-10'>End-to-End <br /><span>AI Services</span> <br /><span className='text-xl'>We turn ambigious AI ideas into production features your<br />
        users trust-combining strategy.design engineering and<br />evaluation.</span></h1>
<h1></h1>
<div className='h-[110%] w-[40%] bg-gray-700/40  shadow-[0px_-2px_5px_0px_gray] rounded-3xl ml-[20%] cursor-pointer transition-transform duration-300 hover:scale-105'>
  <h1 className='text-4xl p-7 flex gap-[60%] cursor-pointer transition-transform duration-300 hover:scale-105'>AI Strategy <br />& Mapping <span className='cursor-pointer transition-transform duration-300 hover:scale-105'><TextAlignStart /></span></h1>
  <h1 className='text-2xs font-semibold pl-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, expedita.</h1>
  <button className='bg-gray-600/30 text-2xs font-semibold shadow-2xs shadow-gray-700 px-4 py-3 rounded-2xl mt-[16%] ml-7 cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-red-700'>Stackeholder discovery</button>
   <button className='bg-gray-600/30 text-2xs font-semibold shadow-2xs shadow-gray-700 px-4 py-3 rounded-2xl mt-[16%] ml-7 cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-red-700'>Value Model & definition</button>
</div>
         </div>
        
      </div>
       

       
    </div>
  )
}

export default Left
