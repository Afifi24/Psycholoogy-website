import React from "react";
import Header from '../components/about/Header'
import Hero from '../components/about/Hero'
import Locationship from "../components/about/Locationship";
import Family from '../components/about/Family'
import Client from "../components/about/Client";
import People from '../components/about/People'
import Healty from '../components/about/Healty'
import Footer from '../components/about/Footer'
const About = ()=>{
    return(
        <div className="">
             <Header/>
             <Locationship/>
             <Hero/>
             <Family/>
             <Client/>
             <People/>
             <Healty/>
             <Footer/>
        </div>
    )
}


export default About