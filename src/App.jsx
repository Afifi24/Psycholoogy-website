import React from 'react'
import Home1 from './Pages/Home1'
import Home2 from './Pages/Home2'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home1/>}/>
          <Route path='/home2' element={<Home2/>}/>
        </Routes>
    </div>
  )
}

export default App