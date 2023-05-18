import React, { useState,useRef } from 'react'
import logo from '../assets/images/psi-removebg-preview.png'
import {AiOutlineBars} from 'react-icons/ai'
import {MdOutlineClose} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const Header = () => {
    const [isopen,setIsopen] = useState(false)
    const [show,setShow] = useState(false)
    const useref = useRef()
    const closenav = (e)=>{
        if(useref.current == e.target){
           setIsopen(false)
        }
    }
    const Showhide = ()=>{
          setShow(!show)
    }
  return (
    <div>
      <div className='bg-[#FF5142] relative overflow-hidden px-4 lg:px-10 pt-4 min-h-screen font-Kumbh m-2 rounded-xl'>
         <nav className='flex items-center justify-between '>
            <div className='flex items-center gap-3'>
                <img className='w-48' src='https://assets.website-files.com/6399ec1545e218ece386c9b6/639a0d680ebba097d7bc57b5_Psychology-logo-white.svg' alt="" />
                
            </div>
            <ul className=' hidden lg:flex  items-center gap-10'>
                <li onMouseOver={Showhide}  className='text-white  relative text-lg '>
                  <p className=' cursor-pointer'>Demos</p>
                {
                  show &&  <div className='bg-white rounded-xl p-6 absolute top-6 text-black flex flex-col gap-2'>
                  <a className='cursor-pointer' href="">home1</a>
                  <a className='cursor-pointer' href="">home2</a>
                  </div>
                }
                
                </li>
               
                
                <li className='text-white text-lg '>About</li>
                <li className='text-white text-lg '>Sessions</li>
                <li className='text-white text-lg '>Contact Us</li>
                <li className='text-white text-lg '>All pages</li>
            </ul>
            <button className=' hidden lg:flex  rounded-full text-white   hover:text-[#FF5142] duration-200 border hover:bg-white text-lg py-5 px-8'>Book a consultation</button>
            <div onClick={()=>setIsopen(!isopen)} className='lg:hidden z-50 cursor-pointer text-white text-4xl'>
                <AiOutlineBars className={` ${isopen ? 'text-black':''}`}/>
                
            </div>
            {
                isopen &&
               <div onClick={closenav} ref={useref} className={`absolute ${isopen ? '-translate-x-0 duration-500':'-translate-x-full duration-500'} w-full h-full min-h-screen left-0 top-0 `}>
                 <div className={`lg:hidden ${isopen ? '-translate-x-0 duration-500':'-translate-x-full duration-500'}  absolute top-0 left-0 h-full min-h-screen px-6 py-6 w-2/3 bg-white`} id='mobile'>
                     <div className='flex items-center'>
                        <h1 className='font-bold text-xl uppercase'>psychology</h1>
                     <MdOutlineClose onClick={()=>setIsopen(!isopen)} className='text-4xl cursor-pointer absolute right-4 top-6'/>

                     </div>

                     <div className='mt-10 flex flex-col gap-4'>
                            <div onMouseEnter={Showhide} onMouseLeave={Showhide} className='flex flex-col gap-4'>
                                <div href='' className=' flex justify-between items-center cursor-pointer'  >
                                  
                                <p onMouseEnter={Showhide} onMouseLeave={Showhide}>  Demos</p>
                                <MdOutlineKeyboardArrowDown className={`${show ? 'rotate-180 duration-200' :' duration-200'}`}/>
                                  
                                  
                                  </div>
                                { show &&
                                    <div className='flex pl-4 flex-col gap-3'>
                                    <a className='hover:text-red-500' href="">Home1</a>
                                    <a className='hover:text-red-500' href="">Home2</a>
                                </div>}
                            </div>

                             <div className='flex flex-col gap-4'>
                             <a className='cursor-pointer duration-200 hover:text-red-500'>About</a>
                             <a className='cursor-pointer duration-200 hover:text-red-500'>Sessions</a>
                             <a className='cursor-pointer duration-200 hover:text-red-500'>Contact Us</a>
                             </div>
                             <div>
                                <a>All pages</a>
                             </div>
                     </div>
             </div>
               </div>
            }
            
         </nav>
         
         <header className=' mt-32 lg:mt-16'>
             <div className='flex flex-col  lg:flex-row items-center '>
               <div className='flex flex-col text-white justify-center gap-8'>
               <h1 className=' text-5xl lg:text-6xl leading-[48px] lg:leading-[70px] font-bold'>Your Mental <br /> Health Matters</h1>
               <p className='text-lg'>I help people across the country and around the world create and sustain loving and resilient relationship.</p>
               <button className=' w-fit  rounded-full hover:text-white bg-white  text-[#615c5c] duration-200 border hover:bg-transparent text-lg py-5 px-8'>Book a consultation</button>
               </div>
               <div className='w-full'>
                <img className=' lg:absolute z-50 lg:w-1/2 xl:w-full lg:right-3 lg:-bottom-2 xl:relative'  src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639cb57a567c9cb407a525ae_My%20project%201.webp" alt="" />
               </div>
                
                <img className='absolute image1-animation w-1/2 md:w-1/3 top-4 left-2' src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca9553510a31b2c95753b_Vector%2024.svg" alt="" />
                <div className='absolute hidden lg:block image2-animation    left-0 w-1/3 -bottom-48 md:-bottom-10 md:w-1/4'>
                <img className='w-full ' src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca955617149547d8b36c3_Vector%2023.svg" alt="" />
                </div>
                <img className='absolute w-full top-1/2 md:top-40 -right-10 image3-animation md:w-1/2' src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca955155635f6990e12b1_Vector%2022.svg" alt="" />
                <img className='absolute image2-animation hidden lg:block bottom-0  -right-20 md:w-[50%]' src="	https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca9553510a3d50195753a_Vector%2025.svg" alt="" />
             </div>
         </header>
      </div>

    </div>
  )
}

export default Header