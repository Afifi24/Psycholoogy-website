import React,{useState} from 'react'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { motion} from 'framer-motion'
const Testimonials = ({item}) => {
    const [closeitem,setCloseitem] = useState(false)

  return (
    <motion.div  onClick={()=>setCloseitem(!closeitem)}   
    >
        <motion.div  className='flex cursor-pointer items-center justify-between'>
                      <h1 className='text-[#FF5142] font-semibold text-2xl'>{item.title}</h1>
                      <MdOutlineArrowDropDown className={` duration-200 text-5xl ${closeitem ? 'rotate-180':''} text-[#FF5142]`}/>
                      </motion.div>
                       <motion.div  >
                        { closeitem &&  
                        <motion.p  
                        className='text-[#737886] duration-200 transition text-lg'>{item.desc}</motion.p>
                       }
                       </motion.div>
    </motion.div>
  )
}

export default Testimonials