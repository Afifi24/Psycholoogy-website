import React,{useState} from 'react'
import {MdOutlineArrowDropDown} from 'react-icons/md'

const Testimonials = ({item}) => {
    const [closeitem,setCloseitem] = useState(false)

  return (
    <div>
        <div onClick={()=>setCloseitem(!closeitem)}  className='flex cursor-pointer items-center justify-between'>
                      <h1 className='text-[#FF5142] font-semibold text-2xl'>{item.title}</h1>
                      <MdOutlineArrowDropDown className={` duration-200 text-5xl ${closeitem ? 'rotate-180':''} text-[#FF5142]`}/>
                      </div>
                       { closeitem && 
                        <p className='text-[#737886] text-lg'>{item.desc}</p>
                       }
    </div>
  )
}

export default Testimonials