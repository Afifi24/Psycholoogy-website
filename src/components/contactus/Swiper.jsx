import React from "react";
import { address } from "../../Data";
import 'swiper/css';
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react';
const Swipe = ()=>{
    return(
        <div>
          {/* <Swiper>
             
                    {
                        address.map(item=>(
                            <SwiperSlide key={item.id}>
                    <h1 className="font-bold text-xl">{item.city}</h1>
                    <div className="flex items-center gap-2">
                        <CiLocationOn className="text-red-500"/>
                    <p className="text-red-500 text-lg"> {item.addres}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsFillTelephoneFill className="text-red-500"/>
                    <p className="text-red-500 text-lg">{item.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiOutlineMail className="text-red-500"/>
                    <p className="text-red-500 text-lg"> {item.email}</p>
                    </div>
                    
                    </SwiperSlide>
                        ))
                    }
          </Swiper> */}
           <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
        </div>
    )
}

export default Swiper