import React,{useState} from 'react'
import Home1 from './Pages/Home1'
import Home2 from './Pages/Home2'
import { Route,Routes } from 'react-router-dom'
import About from './Pages/About'
import Sessions from './Pages/Sessions'
import Contactus from './Pages/Contactus'
import Ourteam from './Pages/Ourteam'
import Nav from './components/Nav'
import Menu from './components/Menu'
const App = () => {
  const [isopen,setIsopen] = useState(false)
  return (
    <div > 
           <Nav isopen={isopen} setIsopen={setIsopen}/>
           <Menu  isopen={isopen} setIsopen={setIsopen}/>
        <Routes>
          <Route path='/' element={<Home1/>}/>
          <Route path='/home2' element={<Home2/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sessions' element={<Sessions/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/ourteam' element={<Ourteam/>}/>
        </Routes>
    </div>
  )
}

export default App