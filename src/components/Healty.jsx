import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {CgArrowLongRight} from 'react-icons/cg'
const Healty = () => {
  return (
    <div className='min-h-screen mt-10 py-6 font-Manrope '>
      <div className='w-[90%] m-auto'>
       <div className='flex gap-8 md:gap-0 py-6 md:py-0 flex-col md:flex-row items-center  border-b-[1px] border-black border-t-[1px]  min-h-[40vh] '>
          <div className='space-y-1 flex order-2 md:order-1 flex-col  flex-1'>
          <p className='text-[#737886] text-lg'>23.12.2022</p>
          <h1 className='font-bold text-2xl cursor-pointer hover:text-[#FF5142] duration-200'>Promoting mental health and wellness is crucial for healthy communities. Therapy expectations and...</h1>
          <CgArrowLongRight className='text-3xl text-[#FF5142]'/>
          </div>
          <div className='flex order-1 md:order-2 justify-end flex-1'>
            <img className='md:w-[40%] rounded-xl' src="https://assets.website-files.com/6399ec1645e218589086c9c0/639c47d34e82c1202fdff6cb_fernando-brasil-XM_2oqcbpIQ-unsplash.jpg" alt="" />
          </div>
       </div>
       <div className='flex gap-8 md:gap-0 py-6 md:py-0 flex-col md:flex-row items-center  border-b-[1px] border-black   min-h-[40vh] '>
          <div className='space-y-1 flex order-2 md:order-1 flex-col  flex-1'>
          <p className='text-[#737886] text-lg'>17.05.2023</p>
          <h1 className='font-bold text-2xl cursor-pointer hover:text-[#FF5142] duration-200'>Negative stereotypes associated with mental illnesses can lead to discrimination towards...</h1>
          <CgArrowLongRight className='text-3xl text-[#FF5142]'/>
          </div>
          <div className='flex order-1 md:order-2 justify-end flex-1'>
            <img className='md:w-[40%] rounded-xl' src="https://assets.website-files.com/6399ec1645e218589086c9c0/639c52df872f31bde7d03e35_jed-villejo-bEcC0nyIp2g-unsplash%20(1).jpg" alt="" />
          </div>
       </div>
       <div className='flex gap-8 md:gap-0 py-6 md:py-0 flex-col md:flex-row items-center  border-b-[1px] border-black   min-h-[40vh] '>
          <div className='space-y-1 flex order-2 md:order-1 flex-col  flex-1'>
          <p className='text-[#737886] text-lg'>10.01.2023</p>
          <h1 className='font-bold text-2xl cursor-pointer hover:text-[#FF5142] duration-200'>Depression can interfere with us, it often goes unrecognized, negatively affecting how we feel and how we act...</h1>
          <CgArrowLongRight className='text-3xl text-[#FF5142]'/>
          </div>
          <div className='flex order-1 md:order-2 justify-end flex-1'>
            <img className='md:w-[40%] rounded-xl' src="https://assets.website-files.com/6399ec1645e218589086c9c0/639c5362dc487949c77bdc27_yanapi-senaud-zoIBh4s0x6Y-unsplash%20(1).jpg" alt="" />
          </div>
       </div>

      </div>
    </div>
  )
}

export default Healty