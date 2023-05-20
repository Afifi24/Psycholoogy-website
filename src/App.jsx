import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Client from './components/Client'
import Relationship from './components/Relationship'
import People from './components/People'
const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Client/>
        <Relationship/>
        <People/>
    </div>
  )
}

export default App