import React from "react";
import Header from '../components/about/Header'
import Hero from '../components/about/Hero'
import Locationship from "../components/about/Locationship";
import Family from '../components/about/Family'
import Client from "../components/about/Client";
import People from '../components/about/People'
import Healty from '../components/about/Healty'
import Team from '../components/about/Team'
const About = ({theme,setTheme})=>{
    return(
        <div className="overflow-hidden">
             <Header theme={theme} setTheme={setTheme}/>
             <Locationship/>
             <Hero/>
             <Family/>
             <Client/>
             <People/>
             <Team/>
             <Healty/>
        </div>
    )
}


export default About