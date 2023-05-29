import React, { useState,useRef } from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import {MdOutlineClose} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {easeInOut, motion} from 'framer-motion'
import { Link } from 'react-router-dom'
const Header = ({theme,setTheme}) => {

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
      <div className='bgheaderhome2 font-Manrope relative overflow-hidden px-4 lg:px-10 pt-4 min-h-screen   '>
         <nav className='flex items-center justify-between '>
            <div className='flex items-center gap-3'>
                <img className='w-48' src='https://assets.website-files.com/6399ec1545e218ece386c9b6/639a01dfd62c9f5f9a7057ee_Psychology-logo.svg' alt="" />
                
            </div>
            <ul className=' hidden lg:flex  items-center gap-0'>
                <li onMouseEnter={Showhide} onMouseLeave={Showhide} className='text-white  p-[20px] z-50   relative text-lg '>
                  <p className=' hover:text-[#FFCBC7] cursor-pointer'>Demos</p>
                {
                  show &&  <div className='bg-white text-[15px] rounded-xl p-4 min-w-[150px] absolute top-16 text-black flex flex-col gap-2'>
                 <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'/>
                 <Link to={'/'}>
                 <p onClick={()=>setTheme('home1')} className={` ${theme === 'home1' ? 'text-red-500':''} cursor-pointer hover:text-red-500 duration-200`} href=""> home1</p>
                 </Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'/>
                 <Link to={'/home2'}>
                 <p onClick={()=>setTheme('home2')} className={` ${theme === 'home2'? 'text-red-500':''} cursor-pointer hover:text-red-500 duration-200`} href=""> home2</p>
                 </Link>
                 </div>
                 <div className='w-5 h-5 bg-white absolute  -top-2 rotate-45'></div>
                  </div>
                }
                
                </li>
               
                
                <Link to={'/about'}><li onClick={()=>setTheme('about')} className={` p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer ${theme === 'about' ? 'text-red-300':'text-white'} `}>About</li></Link>
                <Link to={'/sessions'}> <li onClick={()=>setTheme('sessions')} className={` ${theme === 'sessions' ? 'text-red-500':''} text-white p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer `}>Sessions</li></Link>
                <Link to={'/contact'}><li onClick={()=>setTheme('contact')} className={`${theme === 'contact' ? 'text-red-500':''} text-white p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer `}>Contact Us</li></Link>
                <li onMouseEnter={()=>setPages(true)} onMouseLeave={()=>setPages(false)} className='text-white  p-[20px] z-[100]   relative text-lg '>
                  <p className=' hover:text-[#FFCBC7] cursor-pointer'>All pages</p>
                  {
                  pages && 
                  
                <div className='bg-white rounded-xl p-6 min-w-[380px] absolute top-16 text-black flex items-center gap-0'>
                <div className=' flex-1 text-[15px]'>
                <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/'}><p onClick={()=>setTheme('home1')} className={` ${theme === 'home1' ? 'text-red-500':''} cursor-pointer hover:text-red-500 duration-200`} href=""> Home1</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/home2'}><p onClick={()=>setTheme('home2')} className={` ${theme === 'home2'? 'text-red-500':''} cursor-pointer hover:text-red-500 duration-200`} href=""> Home2</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/about'}><p onClick={()=>setTheme('about')} className={`cursor-pointer hover:text-red-500 duration-200 ${theme === 'about'? 'text-red-300':''}`} href="">About Us</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                <Link to={'/ourteam'}> <p onClick={()=>setTheme('team')} className={`cursor-pointer hover:text-red-500 duration-200 ${theme === 'team'? 'text-red-300':''} `} href="">Our Team</p></Link>
                 </div>
                 
                </div>
                  <div className=' flex-1 text-[15px]'>
                  <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/team-member'}><p onClick={()=>setTheme('teammember')} className={`${theme === 'teammember'? 'text-red-300':''} cursor-pointer hover:text-red-500 duration-200`} href="">Team Member</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/sessions'}><p onClick={()=>setTheme('sessions')} className={`cursor-pointer hover:text-red-500 duration-200 ${theme === 'sessions'? 'text-red-300':''} `} href="">Sessions </p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/pricing'}><p onClick={()=>setTheme('pricing')} className={`cursor-pointer hover:text-red-500 duration-200 ${theme === 'pricing'? 'text-red-300':''} `} href="">Pricing </p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/contact'}><p onClick={()=>setTheme('contact')} className={`cursor-pointer hover:text-red-500 duration-200 ${theme === 'contact'? 'text-red-300':''} `} href="">Contact </p></Link>
                 </div>
                  </div>
                 <div className='w-5 h-5 bg-white absolute  -top-2 rotate-45'></div>
                  </div>
                }
                
                
                </li>
            </ul>
            <button className=' hidden lg:flex  rounded-full text-white   hover:text-[#FF5142] duration-200 border hover:bg-white text-lg py-5 px-8'>Book a consultation</button>
              
         </nav>
         
         <header className=' mt-32 lg:mt-16'>
             <div className='flex  gap-16 pb-10 md:pb-0 min-h-screen md:pl-10 md:flex-row flex-col items-center '>
             <div  className=' space-y-4 text-white w-full  md:w-auto order-2 md:min-w-[200px] md:order-1 z-50'>
                  <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:0.5, delay:0.5}} className='cardbg w-full  rounded-xl space-y-2   p-8'>
                     <h1 className=' font-bold  text-5xl '>10,000+ </h1>
                     <p className=''>Happy Clients</p>
                  </motion.div>
                  <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.75, duration:0.5}} className='cardbg w-full rounded-xl space-y-2  md:min-w-[200px] p-8'>
                     <h1 className=' font-bold  text-5xl '>10 </h1>
                     <p className=''>Mentoring Classes</p>
                  </motion.div>
                  <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:0.5, delay:1}} className='cardbg w-full rounded-xl space-y-2  md:min-w-[200px] p-8'>
                     <h1 className=' font-bold  text-5xl '>30 </h1>
                     <p className=''>Years Experience</p>
                  </motion.div>
               </div>
               <div className='flex order-1 md:order-2 flex-col text-white justify-center gap-8'>
               <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{delay:0.5, duration:0.5}}  className=' text-6xl lg:text-6xl md:leading-[48px] leading-[68px] lg:leading-[70px] font-bold'>Your Mental <br /> Health Matters</motion.div>
               <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}  className='text-lg max-w-xl'>I help people across the country and around the world create and sustain loving and resilient relationship.</motion.p>
               <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:1.5,delay:1}} className=' w-fit  rounded-full z-50  bg-[#FF5142]  text-white duration-200 border border-transparent hover:text-[#FF5142] hover:border-[#FF5142]  hover:bg-transparent text-lg py-5 px-8'>Book a consultation</motion.button>
               </div>
               
               
             </div>
         </header>
      </div>

    </div>
  )
}

export default Header