import React from "react";
import Header from '../components/sessions/Header'
import Family from '../components/sessions/Family'
import Client from '../components/sessions/Client'
import Consultation from '../components/sessions/Consultaion'
const Sessions = ({theme,setTheme})=> {
    return(
        <div className="overflow-hidden">
         <Header theme={theme} setTheme={setTheme}/>
         <Family/>
         <Consultation/>
         <Client/>
        </div>
    )
}

export default Sessions