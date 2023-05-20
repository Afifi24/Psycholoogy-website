import React from 'react'

const Store = () => {
  return (
    <div className='min-h-screen font-Manrope'>
      <div className='w-[90%] m-auto'>
        <div className='flex flex-col gap-6 lg:gap-0 md:flex-row justify-between items-center'>
         <h1 className='text-4xl font-bold text-[#0E0E0E] '>My Personal Store</h1>
         <button className='   rounded-full  z-50 hover:text-white   duration-200 border border-[#FF5142] hover:bg-[#FF5142] text-lg py-4 px-8'>View All</button>
        </div>
        <div className='grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-4'>
           <div className='flex flex-col gap-1'>
            <img className='rounded-lg mb-2 cursor-pointer' src="https://assets.website-files.com/6399ec1645e218589086c9c0/639c6807c9a6a2497d1faa28_alabaster-co-nI6DVmBI_G4-unsplash.jpg" alt="" />
            <h1 className='font-bold text-xl hover:text-black duration-200 cursor-pointer text-[#FF5142]'>The Undescovered Self</h1>
            <p className='text-[#737886] text-lg'> $ 24.99 USD</p>
           </div>
           <div className='flex flex-col gap-1'>
            <img className='rounded-lg mb-2 cursor-pointer' src="https://assets.website-files.com/6399ec1645e218589086c9c0/639c682247e46b42bf2dc90f_alabaster-co-c8DEh6ZtqBE-unsplash.jpg" alt="" />
            <h1 className='font-bold text-xl hover:text-black duration-200 cursor-pointer text-[#FF5142]'>Mental Immunity</h1>
            <p className='text-[#737886] text-lg'> $ 22.99 USD</p>
           </div>
           <div className='flex flex-col gap-1'>
            <img className='rounded-lg mb-2 cursor-pointer' src="https://assets.website-files.com/6399ec1645e218589086c9c0/639c684b8adaf041d905ba23_alabaster-co-vIcAZ77BCeI-unsplash.jpg" alt="" />
            <h1 className='font-bold text-xl hover:text-black duration-200 cursor-pointer text-[#FF5142]'>Personality Theories</h1>
            <p className='text-[#737886] text-lg'> $ 25.99 USD</p>
           </div>
           <div className='flex flex-col gap-1'>
            <img className='rounded-lg mb-2 cursor-pointer' src="https://assets.website-files.com/6399ec1645e218589086c9c0/639c69b3d36618694e5615d6_alabaster-co-UtRyYXcbK6A-unsplash.jpg" alt="" />
            <h1 className='font-bold text-xl hover:text-black duration-200 cursor-pointer text-[#FF5142]'>Mind in Society</h1>
            <p className='text-[#737886] text-lg'> $ 21.99 USD</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Store