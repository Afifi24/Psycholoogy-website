import React, { useState } from 'react'
import imghero from '../../assets/images/hero.jpg'
import { testimonials } from '../../Data'
import Testimonials from './Testimonials'
import {motion} from 'framer-motion'
import {buttonHover,textView,PagAnimation,item} from '../../Animation'
const Hero = () => {
   
  return (
    <div className='mt-20  font-Manrope mb-5'>
      <div className='w-[90%] m-auto min-h-screen'>
          <h1 className='text-red-500 uppercase'>what i do</h1>
          <motion.p variants={textView} initial='hidden' whileInView='show' viewport={{once:true}} className='font-bold text-[#0E0E0E] mt-6 max-w-4xl text-4xl'>I offer a professional help to those who need either simple advice or require psychological treatment</motion.p>
          <div className='min-h-screen flex flex-col gap-10 lg:flex-row lg:gap-28 mt-20'>
              <div className='flex-1'>
                <img className='w-full rounded-xl' src={imghero} alt="" />
                
                </div>
              <div className='flex-1 flex flex-col gap-3'>
                <p className='text-[#737886]  text-lg mb-10'>Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
                {testimonials.map(item=>(
                    <motion.div  className='bg-white flex flex-col  shaddow p-4 rounded-xl' key={item.id}>
                      <Testimonials item={item}/>

                    </motion.div>
                ))}
                <motion.button variants={buttonHover} initial='hidden' whileInView='show' whileHover='hover' className='border border-[#FF5142] w-fit py-4 rounded-full px-7 hover:bg-[#FF5142] hover:text-white duration-200 mt-10'>View more services </motion.button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero