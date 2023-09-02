import React from 'react'
import {motion,useViewportScroll} from 'framer-motion'
const Relationship = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <div className='min-h-screen bg-[#FFFAF7] font-Manrope py-20 mt-64  lg:mt-16'>
     <div className='w-[90%] m-auto'>
     <div className='flex flex-col lg:flex-row  items-center gap-10 lg:gap-32'>
          <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-red-500 uppercase'>how can i help you </h1>
            <p className='text-[#737886] text-lg'>Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
            <button className=' w-fit  rounded-full mt-10 z-50 hover:text-[#FF5142] bg-[#FF5142]   text-white duration-200 border border-[#FF5142] hover:bg-transparent text-lg py-4 px-8'>Book a consultation</button>
          </div>
          <div className='bg-white w-full  flex gap-7 flex-col px-6  py-8 lg:px-12 shaddow flex-1 rounded-xl'>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Stress Management </h1>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Dating & Relationships </h1>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Self-Esteem Issues</h1>
            <h1 className='text-2xl lg:text-4xl hover:text-[#FF5142] cursor-pointer duration-200 font-bold'>Psychodynamic</h1>
          </div>
     </div>
     <div className='flex  flex-col md:flex-row items-center mt-10 gap-10 '>
             <motion.div initial={{scale:0.9}}  whileInView={{scale:1}} viewport={{once:true}} transition={{duration:1}}  className='flex-1 rounded-xl overflow-hidden'>
               <img src='https://assets.website-files.com/6399ec1545e218ece386c9b6/639b3b10397f071f66561332_anthony-tran-i-ePv9Dxg7U-unsplash%204.webp' alt="" />
             </motion.div>
             <motion.div initial={{scale:0.9}} whileInView={{scale:1}} viewport={{once:true}}  transition={{duration:1}} className='flex-1 rounded-xl overflow-hidden'>
               <img src='https://assets.website-files.com/6399ec1545e218ece386c9b6/639b3b0dc93a8949dd8d45a9_anthony-tran-i-ePv9Dxg7U-unsplash%203.webp' alt="" />
             </motion.div>
     </div>

     </div>
    </div>
  )
}

export default Relationship