import React from "react";
import Header from '../components/ourteam/Header'
import Client from '../components/ourteam/Client'
import Hero from '../components/ourteam/Hero'
import Team from '../components/ourteam/Team'
const Ourteam = ({theme, setTheme})=>{
    return(
        <div>
        <Header theme={theme} setTheme={setTheme}/>
        <Team />
        <Client/>
        <Hero/>
        </div>
    )
}


export default Ourteam