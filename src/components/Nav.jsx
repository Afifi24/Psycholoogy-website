import React,{useState,useRef} from "react";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {MdOutlineClose} from 'react-icons/md'
import { Link } from "react-router-dom";
const Nav = ({isopen, setIsopen})=> {
    const useref = useRef()
    const [show,setShow] = useState(false)
    const [pages,setPages] = useState(false)

    const closenav = (e)=>{
        if(useref.current == e.target){
           setIsopen(false)
        }
    }
    const Showhide = ()=>{
        setShow(!show)
  }
    return(
        <div>
            
            {/* mobile menu */}
            {
                isopen &&
               <div onClick={closenav} ref={useref} className={`fixed ${isopen ? '-translate-x-0 duration-500':'-translate-x-full duration-500'} w-full z-[100]   left-0 top-0 `}>
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
                             <Link to={'/about'}><p className='cursor-pointer p-[10px] duration-200 hover:text-red-500'>About</p></Link>
                              <Link to={'/sessions'}><p className='cursor-pointer p-[10px] duration-200 hover:text-red-500'>Sessions</p></Link>
                              <Link to={'/contact'}>  <p className='cursor-pointer p-[10px] duration-200 hover:text-red-500'>Contact Us</p></Link>
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
                  <Link to={'/'}> <p className='cursor-pointer hover:text-red-500 duration-200' href=""> Home1</p></Link>
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
                  <Link to={'/team'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Our Team</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/teammember'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Team Member</p></Link>
                 </div>
                 <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                   <Link to={'/sessions'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Sessions </p></Link>
                 </div>
                  <div className='flex group duration-200 items-center gap-2'>
                 <p className='w-0 duration-200 group-hover:w-5  rounded-full h-[2px] bg-red-500'></p>
                 <Link to={'/contact'}><p className='cursor-pointer hover:text-red-500 duration-200' href="">Contact </p></Link>
                 </div>
                 

                                  </div>
                                }
                             </div>
                     </div>
             </div>
               </div>
            }
        </div>
    )
}

export default Nav