import React, { useState,useRef } from 'react'
import logo from '../assets/images/psi-removebg-preview.png'
import {AiOutlineBars} from 'react-icons/ai'
import {MdOutlineClose} from 'react-icons/md'

const Header = () => {
    const [isopen,setIsopen] = useState(false)
    const useref = useRef()
    const closenav = (e)=>{
        if(useRef.current == e.target.value){
           setIsopen(false)
        }
    }
  return (
    <div>
      <div className='bg-[#FF5142] px-4 lg:px-10 pt-4 min-h-screen font-Kumbh m-2 rounded-xl'>
         <nav className='flex items-center justify-between '>
            <div className='flex items-center gap-3'>
                <img className='w-48' src='https://assets.website-files.com/6399ec1545e218ece386c9b6/639a0d680ebba097d7bc57b5_Psychology-logo-white.svg' alt="" />
                
            </div>
            <ul className=' hidden lg:flex  itmes-center gap-10'>
                <li className='text-white text-lg '>Demos</li>
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
               <div onClick={closenav} ref={useref} className='absolute w-full h-screen left-0 top-0 '>
                 <div className={`lg:hidden ${isopen ? '-translate-x-0 duration-500':'-translate-x-full duration-500'}  absolute top-0 left-0 h-screen px-3 py-6 w-2/3 bg-white`} id='mobile'>
                     <div className='flex items-center'>
                        <h1 className='font-bold text-xl uppercase'>psychology</h1>
                     <MdOutlineClose onClick={()=>setIsopen(!isopen)} className='text-4xl cursor-pointer absolute right-4 top-6'/>

                     </div>
             </div>
               </div>
            }
            
         </nav>
         
         <header className=' mt-48 lg:mt-4'>
             <div className='flex items-center '>
               <div className='flex flex-col text-white justify-center gap-8'>
               <h1 className='text-6xl leading-[70px] font-bold'>Your Mental <br /> Health Matters</h1>
               <p className='text-lg'>I help people across the country and around the world create and sustain loving and resilient relationship.</p>
               <button className=' w-fit  rounded-full hover:text-white bg-white  text-[#615c5c] duration-200 border hover:bg-transparent text-lg py-5 px-8'>Book a consultation</button>
               </div>
               <div className='w-full'>
                <img className=''  src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639cb57a567c9cb407a525ae_My%20project%201.webp" alt="" />
               </div>
                
                {/* <img src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca9553510a31b2c95753b_Vector%2024.svg" alt="" />
                <img src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca955617149547d8b36c3_Vector%2023.svg" alt="" />
                <img src="https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca955155635f6990e12b1_Vector%2022.svg" alt="" />
                <img src="	https://assets.website-files.com/6399ec1545e218ece386c9b6/639ca9553510a3d50195753a_Vector%2025.svg" alt="" /> */}
             </div>
         </header>
      </div>

    </div>
  )
}

export default Header