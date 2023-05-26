import React from "react";
import Hero from '../components/Pricing/Hero'
import Header from '../components/Pricing/Header'
import People from '../components/Pricing/People'
import Consultation from "../components/Pricing/Consultaion";
import Price from '../components/Pricing/Price'
const Pricing = ()=>{
    return(
        <div>
         <Header/>
         <Price/>
         <Hero/>
         <Consultation/>
         <People/>
        </div>
    )
}

export default Pricing