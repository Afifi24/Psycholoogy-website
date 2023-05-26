import React from "react";
import Header from '../components/sessions/Header'
import Family from '../components/sessions/Family'
import Client from '../components/sessions/Client'
import Consultation from '../components/sessions/Consultaion'
const Sessions = ()=> {
    return(
        <div>
         <Header/>
         <Family/>
         <Consultation/>
         <Client/>
        </div>
    )
}

export default Sessions