import React from "react";
import Header from '../components/teammember/Header'
import About from '../components/teammember/About'
const Teammember = ({theme,setTheme})=>{
    return(
        <div className="overflow-hidden">
        <Header theme={theme} setTheme={setTheme}/>
        <About/>

        </div>
    )
}
export default Teammember