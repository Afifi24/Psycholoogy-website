import React from 'react'
import clientimg from '../../assets/images/pexels-andrea-piacquadio-789822.jpg'
import { clientimgg } from '../../Animation'
import {motion} from 'framer-motion'
const Client = () => {
  return (
    <div className=' pt-10 overflow-hidden'>
        <div className='  mb-10  flex-col-reverse lg:flex-row-reverse flex gap-56 lg:gap-20 items-start w-[90%] m-auto font-Manrope min-h-screen'>
           <div className='flex flex-col gap-6 flex-1'>
            <h1 className='uppercase text-red-500'>what client says</h1>
            <p className='font-bold text-[#0E0E0E] mt-6 max-w-4xl text-4xl'>TheraMental is a company engaged in mental health consulting</p>
            <p className='text-[#737886]  text-lg'>Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
            <button className='border border-[#FF5142] w-fit py-4 rounded-full px-7 hover:bg-[#FF5142] hover:text-white duration-200 mt-10'>About US </button>
           </div>
           <motion.div variants={clientimgg} initial='hidden' whileInView={'show'} viewport={{once:true}} className='flex-1 relative'>
            <img className='rounded-xl' src={clientimg} alt="" />
            <div className='absolute   right-5 left-5 bg-white -bottom-48 lg:-bottom-32 lg:right-20    space-y-2 p-10 rounded-xl shaddow'>
                <h1 className=' font-bold text-xl sm:text-2xl  text-red-500'>You don’t have to control your thoughts. You just have to stop letting them control you.</h1>
                <p className='text-[#737886]'>Jenie Cooper, 24 y.o</p>

            </div>
           </motion.div>
         </div> 
    </div>
  )
}

export default Client