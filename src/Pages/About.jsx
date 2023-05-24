import React from "react";
import Header from '../components/about/Header'
import Hero from '../components/about/Hero'
import Locationship from "../components/about/Locationship";
import Family from '../components/about/Family'
const About = ()=>{
    return(
        <div className="">
             <Header/>
             <Locationship/>
             <Hero/>
             <Family/>
        </div>
    )
}


export default About