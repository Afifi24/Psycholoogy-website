import React from "react";
import {AiOutlineBars} from 'react-icons/ai'


const Menu = ({isopen,setIsopen,theme})=>{
    return(

        <div>
            <div onClick={()=>setIsopen(!isopen)} className='lg:hidden absolute right-4 top-4 z-50 cursor-pointer text-white text-4xl'>
                <AiOutlineBars className={` ${theme === 'about' || theme === 'sessions' || theme === 'home2'  ? 'text-white':'text-black'}  `}/>
            </div>
        </div>
    )
}

export default Menu