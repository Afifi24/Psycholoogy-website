import React, { useState,useRef } from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import {MdOutlineClose} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {easeInOut, motion} from 'framer-motion'
import { Link } from 'react-router-dom'
const Header = () => {

    const [isopen,setIsopen] = useState(false)
    const [show,setShow] = useState(false)
    const [pages,setPages] = useState(false)
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
      <div className=' relative overflow-hidden  pt-4 lg:min-h-screen font-Manrope '>
         <nav className='flex items-center px-4 lg:px-10 justify-between '>
            <div className='flex items-center gap-3'>
                <img className='w-48' src='https://assets.website-files.com/6399ec1545e218ece386c9b6/639a01df2ec4b125a8cb52a2_Psychology-logo-dark.svg' alt="" />
                
            </div>
            <ul className=' hidden lg:flex  items-center gap-0'>
                <li onMouseEnter={Showhide} onMouseLeave={Showhide} className='  p-[20px] z-50   relative text-lg '>
                  <p className=' hover:text-[#FFCBC7] cursor-pointer'>Demos</p>
                {
                  show &&  <div className='bg-white text-[15px] shaddow rounded-xl p-4 min-w-[150px] absolute top-16 text-black flex flex-col gap-2'>
                 <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'/>
                 <Link to={'/'}>
                 <p className='cursor-pointer hover:text-red-500 duration-200' href=""> home1</p>
                 </Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'/>
                 <Link to={'/home2'}>
                 <p className='cursor-pointer hover:text-red-500 duration-200' href=""> home2</p>
                 </Link>
                 </div>
                 <div className='w-5 h-5 bg-white absolute  -top-2 rotate-45'></div>
                  </div>
                }
                
                </li>
               
                
                <Link to={'/about'}><li className=' p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer '>About</li></Link>
                <Link to={'/sessions'}> <li className=' p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer '>Sessions</li></Link>
               <Link to={'/contact'}><li className=' p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer '>Contact Us</li></Link>
                <li onMouseEnter={()=>setPages(true)} onMouseLeave={()=>setPages(false)} className='  p-[20px] z-[100]   relative text-lg '>
                  <p className=' hover:text-[#FFCBC7] cursor-pointer'>All pages</p>
                  {
                  pages && 
                  
                <div className='bg-white shaddow rounded-xl p-6 min-w-[380px] absolute top-16 text-black flex items-center gap-0'>
                <div className=' flex-1 text-[15px]'>
                <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/home1'}><p className='cursor-pointer hover:text-red-500 duration-200' href=""> Home1</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/home2'}><p className='cursor-pointer hover:text-red-500 duration-200' href=""> Home2</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/about'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">About Us</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                <Link to={'/ourteam'}> <p className='cursor-pointer hover:text-red-500 duration-200' href="">Our Team</p></Link>
                 </div>
                 
                </div>
                  <div className=' flex-1 text-[15px]'>
                  <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/team-member'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Team Member</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/sessions'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Sessions </p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/pricing'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Pricing </p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/contact'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Contact </p></Link>
                 </div>
                  </div>
                 <div className='w-5 h-5 bg-white absolute  -top-2 rotate-45'></div>
                  </div>
                }
                
                
                </li>
            </ul>
            <button className=' hidden lg:flex  rounded-full text-black   hover:text-white duration-200 border border-[#FF5142] hover:bg-[#FF5142] text-lg py-5 px-8'>Book a consultation</button>
            
          
            
         </nav>
         
         <header className=' mt-4   lg:mt-4'>
             <div className='flex h-[50vh] md:h-[80vh] md:w-full flex-col  lg:flex-row items-center '>
              <img className='h-full w-full object-cover' src="https://assets.website-files.com/6399ec1545e218ece386c9b6/63a19449100c7ce20b57ac87_Nimble%20Division%20Map.webp" alt="" />
  
             </div>
         </header>
      </div>

    </div>
  )
}

export default Header