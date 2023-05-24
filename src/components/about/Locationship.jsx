import React from "react";
import {Location} from '../../Data';
import {CgArrowLongRight} from 'react-icons/cg'
import {motion} from 'framer-motion'

const Locationship = ()=>{
    return(
        <div className="min-h-screen py-16 md:py-32 font-Manrope">

          <div className="w-[90%] space-y-32 m-auto">
             <div className=" grid grid-cols-1 gap-10 md:grid-cols-3 ">
                {
                  Location.map(item=>(
                  <div key={item.id} className="bg-white rounded-lg space-y-4 shaddow p-10">
                 <h1 className="font-bold text-[#FF5142] hover:text-black duration-200 cursor-pointer text-2xl ">{item.title}</h1>
                 <p className="text-[#737886]">{item.desc}</p>
                 <CgArrowLongRight className='text-3xl cursor-pointer hover:text-black duration-200 text-[#FF5142]'/>
                </div>
                  ))
                }
             </div>
             <div  className="relative">

              <div className="lg:w-[650px] w-full space-y-4 absolute top-1/2 -translate-y-1/2 left-1/2   -translate-x-1/2">
                <h1 className="text-[28px] md:text-[37px] font-bold text-center">TheraMental is a company engaged in mental health consulting</h1>
                <p className="text-[#737886] lg:mx-12 text-center">Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
              </div>
             <img src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639ceb95a0716a0f39fab30b_map-base%201.webp" loading="lazy" sizes="(max-width: 479px) 0px, (max-width: 991px) 100vw, (max-width: 1279px) 97vw, 1140px" />
             <motion.div 
              initial={{x:0,y:20}}
              animate={{x:20,y:0}}
              transition={{
               duration:4,
               repeat:Infinity,
               repeatType: 'reverse',
               ease: 'easeInOut',
              }}
             className="absolute hidden lg:block  left-16 top-28 w-10">
                <img className="rounded-full" src="https://assets.website-files.com/6399ec1545e218ece386c9b6/63a07a7ab78efe94c9a3074a_maria-lupan-fE5IaNta2KM-unsplash.webp"  />
             </motion.div>
             <motion.div
             initial={{x:-20,y:-20}}
             animate={{x:0,y:0}}
             transition={{
              duration:4,
              repeat:Infinity,
              repeatType:'reverse',
              ease:'easeInOut'

             }}
             className="absolute hidden lg:block w-10 bottom-20 left-[16%]">
             <img className="rounded-full" src="https://assets.website-files.com/6399ec1545e218ece386c9b6/63a48c8da711d81ba6c05a55_jordy-s-dtSaSlDob0c-unsplashgj.webp" />
             </motion.div>

             <motion.div
             initial={{x:20,y:-20}}
             animate={{x:0,y:0}}
             transition={{
              duration:4,
              repeat:Infinity,
              repeatType:'reverse',
              ease:'easeInOut',
             }}
             className="w-10 hidden lg:block absolute top-24 right-28 ">
             <img className="rounded-full  " src="https://assets.website-files.com/6399ec1545e218ece386c9b6/63a07a7ae6fdfcd3b4a175a6_alex-starnes-PK_t0Lrh7MM-unsplash.webp" />
             </motion.div>

             </div>
          </div>
        </div>
    )
}

export default Locationship