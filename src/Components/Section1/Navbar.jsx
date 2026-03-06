import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between '>
            <div className='text-2xl px-4 py-4'>
                         <button >AgentAI</button>

            </div>
            <div className=' border-2 rounded-3xl flex  justify-center items-center mx-6 my-6'>
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Works</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
            </div>
            <div className='text-2xl px-4 py-4'>
                        <button>Menu</button>
            </div>
     
    </div>
  )
}

export default Navbar
