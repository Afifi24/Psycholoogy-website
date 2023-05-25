import React from "react";
import Header from '../components/sessions/Header'
import Family from '../components/sessions/Family'
import Footer from '../components/sessions/Footer'
import Client from '../components/sessions/Client'
import Consultation from '../components/sessions/Consultaion'
const Sessions = ()=> {
    return(
        <div>
         <Header/>
         <Family/>
         <Consultation/>
         <Client/>
         <Footer/>
        </div>
    )
}

export default Sessions