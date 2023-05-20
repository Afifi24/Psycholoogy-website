import React, { useState } from 'react'
import { people } from '../Data'
import designe from '../assets/images/avatar3.jpg'
import ceo from '../assets/images/avatar4.jpg'
import real from '../assets/images/avatar5.jpg'
const People = () => {
  const [index,setIndex] = useState(1)
  const {desc} = people[index]
  return (
    <div className='min-h-screen font-Manrope py-20'>

    <div className='w-[90%] space-y-4 m-auto'>
       <h1 className='text-center font-bold text-xl md:text-2xl lg:text-4xl'>Hear From Our People</h1>
       <div className='grid place-items-center'>
       <p className=' text-md md:text-lg leading-[30px] text-center max-w-[700px] text-[#737886]'>Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
       </div>
       <div className='grid place-items-center'>
       <p className=' text-md md:text-lg leading-[30px] lg:text-2xl my-8 font-bold text-center max-w-[900px] text-[#FF5142]'>{desc}</p>
       </div>
       <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
             <div onClick={()=>setIndex(0)} className={` ${index === 0 ? 'shaddow':''} flex items-center flex-col lg:flex-row cursor-pointer gap-4 bg-white  py-5 px-8 rounded-xl`}>
                <img  className='rounded-full w-16' src={designe} alt="" />
                <div className='flex flex-col gap-1'>
                 <h2 className=' text-md md:text-lg lg:text-xl font-bold text-center lg:text-left'>Courtney Henry</h2>
                 <p className='text-[#737886] text-md md:text-lg text-center lg:text-left'>Designer</p>
                </div>
             </div>
             <div onClick={()=>setIndex(1)} className={` ${index===1 ? 'shaddow':''} flex items-center flex-col lg:flex-row  cursor-pointer gap-4   py-5 px-8 rounded-xl`}>
                <img  className='rounded-full w-16' src={ceo} alt="" />
                <div className='flex flex-col gap-1'>
                 <h2 className='text-md md:text-lg lg:text-xl font-bold text-center  lg:text-left'>Darrell Steward</h2>
                 <p className='text-[#737886] text-md md:text-lg text-center lg:text-left'>CEO Futura</p>
                </div>
             </div>
             <div onClick={()=>setIndex(2)} className={` ${index === 2 ? 'shaddow':''} flex items-center flex-col lg:flex-row cursor-pointer col-span-2 lg:col-span-1 gap-4 bg-white  py-5 px-8 rounded-xl`}>
                <img  className='rounded-full w-16' src={real} alt="" />
                <div className='flex flex-col gap-1'>
                 <h2 className='lg:text-xl text-center text-md md:text-lg font-bold lg:text-left'>Darlene Robertson</h2>
                 <p className='text-[#737886] text-center text-md md:text-lg lg:text-left'>Realtor</p>
                </div>
             </div>
              
       </div>
       
    </div>

    </div>
  )
}

export default People