import React from "react";
import {price} from '../../Data'
import {motion} from 'framer-motion'
import {pricee} from '../../Animation'
const Price = ()=>{
    return(
        <div className="font-Manrope mt-20">
          <div className="w-[90%] m-auto">
            <div className="flex flex-col space-y-4 items-center justify-center ">
                <h1 className="text-center font-bold text-4xl ">Pricing that suits you needs</h1>
                <p className="text-lg text-[#737886] max-w-3xl text-center">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
            </div>
            <div className="grid mt-20 min-h-[70vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {price.map(item=>(
                  <motion.div variants={pricee} initial='hidden' whileInView={'show'} key={item.id} className="flex flex-col  gap-6  items-center p-10 rounded-xl bg-white shaddow">
                  <h1 className="font-bold text-center text-4xl">{item.title}</h1>
                  <p className="text-lg text-center text-[#737886]">{item.desc}</p>
                  <h1 className="text-6xl font-bold">${item.price} <span className="text-sm">/1 hour</span></h1>
                  <button className=' w-full  rounded-full  z-50 hover:text-[#FF5142] bg-[#FF5142]   text-white duration-200 border border-[#FF5142] hover:bg-transparent text-md md:text-lg py-2 md:py-4 px-5  md:px-8'>Book now</button>
                  <p className="text-lg text-center text-[#737886]">{item.conf}</p>
                  <p className="text-lg text-center text-[#737886]">{item.licence}</p>
                  <p className="text-lg text-center text-[#737886]">{item.shedule}</p>
             </motion.div>
                 ))}
            </div>
          </div>
        </div>
    )
}


export default Price