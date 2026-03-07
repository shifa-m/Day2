import React from 'react'
import Right from './Right'
import Left from './Left'

const Header = () => {
            return (
                        <div className='h-screen w-full bg-black mt-15  pt-10 text-white font-bold '>
                                    <div className='w-[99%] h-35 m-3  flex justify-between shadow-[0px_-2px_5px_0px_gray] rounded-2xl pt-12 p-7' >
                                                <h1 className='pl-4 '>Trusted by 100+ <br />Top-tier brands</h1>
                                                <h1>Logoipdum</h1>
                                                <h1></h1>
                                                <h1>LOGOIPSUM</h1>
                                                <h1></h1>
                                                <h1>Logoipsum</h1>
                                                <h1></h1>
                                    </div>
                                    <div className='flex h-[85%] '>
                                                <div className=' w-full  '>
                                                            <Left />
                                                             <Right/>
                                                </div>

                                                
                                    </div>
                        </div>


            )
}

export default Header
