import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#FFFAF7] min-h-screen  font-Manrope mt-10 pb-10 pt-20'>
         <div className='w-[90%] m-auto'>
            <div className='flex flex-col md:flex-row items-start gap-6'>
              <div className=' flex flex-col items-center md:items-start md:justify-start justify-center w-full flex-1'>
                <p className='font-bold text-4xl text-center md:text-7xl'>Let us start</p>
                <p className='font-bold text-4xl md:text-7xl text-center text-[#FF5142]'>a session</p>
              </div>
              <div className=' flex flex-col gap-10 flex-1'>
                <p className='text-lg text-center md:text-left text-[#737886]'>Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
                <div className='flex items-center md:items-start md:justify-start justify-center gap-4'>
                <button className='   rounded-full  z-50 hover:text-[#FF5142] bg-[#FF5142]   text-white duration-200 border border-[#FF5142] hover:bg-transparent text-md md:text-lg py-2 md:py-4 px-5  md:px-8'>Book a consultation</button>
                <button className='   rounded-full  z-50 hover:text-white   duration-200 border border-[#FF5142] hover:bg-[#FF5142] text-md md:text-lg py-2 md:py-4 px-5  md:px-8'>Who we are</button>
                </div>
              </div>
            </div>
            <div className=' mt-16 md:mt-32 flex-col items-center gap-6 md:justify-start justify-center md:flex-row flex md:items-end md:gap-20'>
                <img className=' w-[50%] md:w-[20%]' src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639a01df2ec4b125a8cb52a2_Psychology-logo-dark.svg" alt="" />
                <ul className='flex  gap-10'>
                    <li className='text-[#737886] hover:text-[#ff5142] duration-200 cursor-pointer'>About</li>
                    <li className='text-[#737886] hover:text-[#ff5142] duration-200 cursor-pointer'>Sessions</li>
                    <li className='text-[#737886] hover:text-[#ff5142] duration-200 cursor-pointer'>Pricing</li>
                    <li className='text-[#737886] hover:text-[#ff5142] duration-200 cursor-pointer'>Shop</li>
                </ul>
            </div>
            <div className='flex gap-6 md:gap-0 mt-16 flex-col md:flex-row md:items-center md:justify-between '>
                <div className='flex-1 order-2 md:order-1'>
                    <p className='text-[#737886] text-sm'>&copy; Psychology. All the Rights Reserved 2023</p>
                </div>
                <form className=' space-y-3 order-1 md:order-2 flex-1'>
                    <h2 className='text-2xl font-bold text-[#ff5142]  '>Subscribe to the latest news</h2>
                    <input required className=' w-full md:w-[80%] border-b focus:border-[#ff5142] duration-200 bg-transparent text-xl outline-none py-3 px-3' type="text" placeholder='Email' />
                </form>

            </div>
         </div>
    </div>
  )
}

export default Footer