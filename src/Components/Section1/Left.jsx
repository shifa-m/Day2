import { Link } from 'lucide-react';
import { Link2 } from 'lucide-react';


const Left = () => {
  return (
    <div className='h-full w-full  flex flex-row gap-10  justify-end sm:gap-3 md:gap-5'>
      <div className='flex  flex-col justify-end text-white '>
        <div className='border-2 border-amber-50  rounded-3xl bg-red-500/25 border-none shadow-xs shadow-gray-400 mr-6 sm:mr-2 md:mr-4 sm:pb-1 md:pb-3 lg:pb-3 transition-transform duration-300 hover:scale-105 cursor-pointer lg:h-[45%] lg:w-[90%] sm:h-[26%] sm:w-[50%] md:h-[37%] md:w-[75%] '>
        <div className='lg:m-3 md:m-2 sm:m-1 lg:h-[95%] lg:w-[90%] sm:h-[66%] sm:w-[50%] md:h-[77%] md:w-[75%] rounded-2xl p-3 bg-[url(https://i.pinimg.com/736x/f0/b1/af/f0b1af6bbd87da2ad46fe96e2d88a7ba.jpg)] bg-cover'>
        <h1 className='flex justify-between text-xl'>AgentAi <span>01:04</span></h1>
        <h1 className='lg:mt-[70%] sm:mt-[40%] md:mt-[55%] font-bold lg:text-4xl md:text-2xl sm:text-xl'>230+</h1>
        <h1 className='sm:text-2xs '>Projects sucessfully delivered .</h1>
        </div>
        </div>
        <div className='border-2 border-amber-50 lg:h-70 lg:w-60 md:h-55 md:w-40 sm:h-40 sm:w-20 rounded-3xl shadow-xs shadow-gray-400 bg-red-500/25 sm:mt-2 sm:p-1 md:mt-3 md:p-2 lg:mt-5 lg:p-3 w-[93%] border-none transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <h1 className='text-4xl pl-3'>400+ <br /><span className='text-xl'>Trusted People</span></h1>
        <div className='   text-white flex justify-center mt-10 items-center gap-10'>
         <Link className=' h-7 w-7 ' />
          <Link2 className=' h-7 w-7 '/>
      </div>
        <button className='bg-red-600 px-10 py-2.5 mt-10 py-1 rounded-2xl  ml-12 transition-transform duration-300 hover:scale-110 cursor-pointer'>Book Now</button>
        </div>
      </div>

    </div>
  )
}

export default Left
