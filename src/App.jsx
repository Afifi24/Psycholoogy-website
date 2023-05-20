import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Client from './components/Client'
import Relationship from './components/Relationship'
import People from './components/People'
import Store from './components/Store'
import Healty from './components/Healty'
const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Client/>
        <Relationship/>
        <People/>
        <Store/>
        <Healty/>
    </div>
  )
}

export default App