import React,{useState} from 'react'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {motion} from 'framer-motion'
const Testimonials = ({item}) => {
    const [closeitem,setCloseitem] = useState(false)

  return (
    <div>
        <div onClick={()=>setCloseitem(!closeitem)}  className='flex cursor-pointer items-center justify-between'>
                      <h1 className='text-[#FF5142] font-semibold text-2xl'>{item.title}</h1>
                      <MdOutlineArrowDropDown className={` duration-200 text-5xl ${closeitem ? 'rotate-180':''} text-[#FF5142]`}/>
                      </div>
                       <div >
                        { closeitem &&  
                        <motion.p  
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 , transition:{duration:1.5}}}
                        transition={{ duration: 0.3 }}
                        className='text-[#737886] duration-200 transition text-lg'>{item.desc}</motion.p>
                       }
                       </div>
    </div>
  )
}

export default Testimonials