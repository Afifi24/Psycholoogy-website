import React from "react";
import Family from '../components/contactus/Family'
import Header from '../components/contactus/Header'
import Contact from '../components/contactus/Contact'
const Contactus = ({theme,setTheme})=>{
    return(
        <div>
             <Header theme={theme} setTheme={setTheme}/>
             <Contact />
             <Family/>
        </div>
    )
}

export default Contactus