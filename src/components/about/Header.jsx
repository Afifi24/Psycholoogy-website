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
      <div className='bgheaderabout font-Manrope relative overflow-hidden px-4 lg:px-10 pt-4 md:min-h-screen   '>
         <nav className='flex items-center justify-between '>
            <div className='flex items-center gap-3'>
                <img className='w-48' src='https://assets.website-files.com/6399ec1545e218ece386c9b6/639a0d680ebba097d7bc57b5_Psychology-logo-white.svg' alt="" />
                
            </div>
            <ul className=' hidden lg:flex  items-center gap-0'>
                <li onMouseEnter={Showhide} onMouseLeave={Showhide} className='text-white  p-[20px] z-50   relative text-lg '>
                  <p className=' hover:text-[#FFCBC7] cursor-pointer'>Demos</p>
                {
                  show &&  <div className='bg-white text-[15px] rounded-xl p-4 min-w-[150px] absolute top-16 text-black flex flex-col gap-2'>
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
               
                
                <Link to={'/about'}><li className='text-white p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer '>About</li></Link>
                   <Link to={'/sessions'}><li className='text-white p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer '>Sessions</li></Link>
                <Link to={'/contact'}><li className='text-white p-[20px] text-lg hover:text-[#FFCBC7] duration-200 cursor-pointer '>Contact Us</li></Link>
                <li onMouseEnter={()=>setPages(true)} onMouseLeave={()=>setPages(false)} className='text-white  p-[20px] z-[100]   relative text-lg '>
                  <p className=' hover:text-[#FFCBC7] cursor-pointer'>All pages</p>
                {
                  pages && 
                  
                <div className='bg-white rounded-xl p-6 min-w-[380px] absolute top-16 text-black flex items-center gap-12'>
                <div className='text-[15px]'>
                <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Home1</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Home2</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">About Us</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Our Team</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Team Member</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Pricing </a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">FAQ </a>
                 </div>
                </div>
                  <div className='text-[15px]'>
                  <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Contact Us</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Testimonials</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Sessions</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Sessions Details</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Blog </a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Blog Details</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Shop </a>
                 </div>
                  </div>
                 <div className='w-5 h-5 bg-white absolute  -top-2 rotate-45'></div>
                  </div>
                }
                
                </li>
            </ul>
            <button className=' hidden lg:flex  rounded-full text-white   hover:text-[#FF5142] duration-200 border hover:bg-white text-lg py-5 px-8'>Book a consultation</button>
            <div onClick={()=>setIsopen(!isopen)} className='lg:hidden z-50 cursor-pointer text-white text-4xl'>
                <AiOutlineBars className={` ${isopen ? 'text-black':''}`}/>
                
            </div>
            {/* mobile menu */}
            {
                isopen &&
               <div onClick={closenav} ref={useref} className={`absolute ${isopen ? '-translate-x-0 duration-500':'-translate-x-full duration-500'} w-full z-[100] h-full min-h-screen left-0 top-0 `}>
                 <div className={`lg:hidden ${isopen ? '-translate-x-0 duration-500':'-translate-x-full duration-500'}  absolute top-0 left-0 h-full min-h-screen  py-6 w-2/3 bg-white`} id='mobile'>
                     <div className='flex items-center'>
                        <h1 className='font-bold text-xl uppercase'>psychology</h1>
                     <MdOutlineClose onClick={()=>setIsopen(!isopen)} className='text-4xl cursor-pointer absolute right-4 top-6'/>

                     </div>

                     <div className='mt-10 flex flex-col'>
                            <div onMouseEnter={Showhide} onMouseLeave={Showhide} className='flex  flex-col gap-3'>
                                <div href='' className=' flex p-[10px] justify-between items-center cursor-pointer'  >
                                  
                                <p>  Demos</p>
                                <MdOutlineKeyboardArrowDown className={`${show ? 'rotate-180 duration-200' :' duration-200'}`}/>
                                  
                                  
                                  </div>
                                { show &&
                                    <div className='flex pl-6 flex-col gap-3'>
                                     <div className='flex group items-center gap-2'>
                                        <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                                        <Link to={'/'}><p className='cursor-pointer hover:text-red-500 duration-200' href=""> home1</p></Link>
                                        </div>
                                        <div className='flex group duration-200 items-center gap-2'>
                                        <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                                        <Link to={'/home2'}><p className='cursor-pointer hover:text-red-500 duration-200' href=""> home2</p></Link>
                                        </div>
                                </div>}
                            </div>

                             <div className='flex flex-col'>
                             <Link to={'/about'}> <p className='cursor-pointer p-[10px] duration-200 hover:text-red-500'>About</p></Link>
                             <a className='cursor-pointer p-[10px] duration-200 hover:text-red-500'>Sessions</a>
                             <a className='cursor-pointer p-[10px] duration-200 hover:text-red-500'>Contact Us</a>
                             </div>
                             <div className='p-[10px] flex flex-col gap-3  duration-200 '>
                                <div onClick={()=>setPages(!pages)} className='flex items-center justify-between cursor-pointer'>
                                      <a className='hover:text-red-500'>All pages</a>
                                      <MdOutlineKeyboardArrowDown className={`${pages ? 'rotate-180 duration-200' :' duration-200'}`}/>
                                </div>
                                { pages &&
                   <div className='flex pl-6 flex-col gap-3'>
                  <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Home1</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Home2</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">About Us</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Our Team</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Team Member</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Pricing </a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">FAQ </a>
                 </div>
                 <div className='flex group items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Contact Us</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href=""> Testimonials</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Sessions</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Sessions Details</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Blog </a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Blog Details</a>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <a className='cursor-pointer hover:text-red-500 duration-200' href="">Shop </a>
                 </div>

                                  </div>
                                }
                             </div>
                     </div>
             </div>
               </div>
            }
            
         </nav>
         
         <header className=' mt-24 min-h-[40vh] lg:mt-32'>
             <div className='flex  pb-10 md:pb-0  md:flex-row flex-col items-center '>
            
               <div className='flex text-center md:text-left flex-col text-white justify-center  md:gap-8'>
               <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{delay:0.5, duration:0.5}}  className=' text-5xl md:text-6xl lg:text-7xl md:leading-[48px] leading-[68px] lg:leading-[70px] font-bold'>About Us</motion.div>
               <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}  className='text-lg max-w-xl'>I help people across the country and around the world create and sustain loving and resilient relationship.</motion.p>
               </div>
               
               
             </div>
         </header>
      </div>

    </div>
  )
}

export default Header