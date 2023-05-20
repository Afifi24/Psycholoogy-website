import React from 'react'
import img1 from '../assets/images/clien.jpg'
import img2 from '../assets/images/pexels-anastasiya-lobanovskaya-1035677.jpg'
import img3 from '../assets/images/pexels-luizclas-1848565 (1).jpg'
import img4 from '../assets/images/pexels-admiral-general-m-⭐⭐⭐⭐⭐-godshepherdly-848573.jpg'
import img5 from '../assets/images/pexels-oliver-sjöström-1047051.jpg'
const Relationship = () => {
  return (
    <div className='min-h-screen bg-[#FFFAF7] font-Manrope py-20 mt-64  lg:mt-32'>
     <div className='w-[90%] m-auto'>
     <div className='flex flex-col lg:flex-row  items-center gap-32'>
          <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-red-500 uppercase'>how can i help you </h1>
            <p className='text-[#737886] text-lg'>Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
            <button className=' w-fit  rounded-full mt-10 z-50 hover:text-[#FF5142] bg-[#FF5142]   text-white duration-200 border border-[#FF5142] hover:bg-transparent text-lg py-4 px-8'>Book a consultation</button>
          </div>
          <div className='bg-white  flex gap-7 flex-col py-8 px-12 shaddow flex-1 rounded-xl'>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Stress Management </h1>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Dating & Relationships </h1>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Self-Esteem Issues</h1>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Psychodynamic</h1>
          </div>
     </div>
     <div className='flex  flex-col md:flex-row items-center mt-10 gap-10 '>
             <div className='flex-1 rounded-xl overflow-hidden'>
               <img src={img4} alt="" />
             </div>
             <div className='flex-1 rounded-xl overflow-hidden'>
               <img src={img4} alt="" />
             </div>
     </div>

     </div>
    </div>
  )
}

export default Relationship