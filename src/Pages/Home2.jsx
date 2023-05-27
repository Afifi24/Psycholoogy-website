import React from "react";
import Header from '../components/home2/Header'
import Hero from '../components/home1/Hero'
import Client from '../components/home1/Client'
import Relationship from '../components/home1/Relationship'
import People from '../components/home1/People'
import Store from '../components/home1/Store'
import Healty from '../components/home1/Healty'
const Home2 = ({theme,setTheme})=>{
    return(

        <div>
        <Header theme={theme} setTheme={setTheme}/>
        <Hero/>
        <Client/>
        <Relationship/>
        <People/>
        <Store/>
        <Healty/>
        </div>
    )
}
export default Home2