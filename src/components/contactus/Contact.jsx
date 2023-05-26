import React, { useState } from "react";
// import Swiper from "./Swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import { address } from "../../Data";


import 'swiper/css';
const Contact = ()=>{
const [index,setIndex] = useState(0)
const {city,addres,phone,email} = address[index]

    return(
        <div className="min-h-screen mt-6 pt-12 font-Manrope  ">
           <div className="w-[90%] flex flex-col lg:flex-row gap-6  md:gap-24 m-auto">
          
             <div className="flex-1 flex flex-col gap-5">
                <p className="text-lg uppercase text-red-500">Get in touch</p>
                <h1 className="font-bold text-4xl">Contact our team and start your therapy</h1>
                <p className="text-[#737886]">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
               
            <div className="flex border-t-[1.5px] pt-6 mt-2  justify-between"> 
                  
                     <div className="flex flex-col gap-3">
                     <h1 className="font-bold underline text-xl">{city}</h1>
                    <div className="flex items-center gap-2">
                        <CiLocationOn className="text-red-500"/>
                    <p className="text-[#737886]text-lg"> {addres}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsFillTelephoneFill className="text-red-500"/>
                    <p className="text-red-500 text-lg">{phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiOutlineMail className="text-red-500"/>
                    <p className="text-red-500 text-lg"> {email}</p>
                    </div>
                     </div>
                    <div className="flex items-start gap-2 text-3xl">
                        <MdOutlineKeyboardArrowRight onClick={()=>setIndex(0)} className="cursor-pointer hover:scale-110 rotate-180 duration-200"/>
                        <MdOutlineKeyboardArrowRight onClick={()=>setIndex(1)} className="cursor-pointer hover:scale-110 duration"/>
                    </div>


                </div>
             </div>
             
             <form className="flex  rounded-xl flex-1 flex-col gap-3 p-4 md:p-10 bg-[#FFFAF7]">
                 <input className="h-14 outline-none border border-transparent focus:border-red-500 py-3 rounded-lg px-4" type="text" placeholder="Your name" />
                 <input required className="h-14 outline-none border border-transparent focus:border-red-500 py-3 rounded-lg px-4" type="email" placeholder="Your email" />
                 <textarea placeholder="Message" className=" rounded-lg px-4 py-3 border border-transparent focus:border-red-500 outline-none" name="" id="" cols="30" rows="6"></textarea>
                 <button className='   rounded-full mt-4 hover:text-[#FF5142] bg-[#FF5142]   text-white duration-200 border border-[#FF5142] hover:bg-transparent md:w-fit text-md md:text-lg py-4 px-5  md:px-8'>Submit</button>
             </form>
           </div> 
        </div>
    )
}

export default Contact