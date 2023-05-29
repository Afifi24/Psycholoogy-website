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
import Footer from './components/home1/Footer'
import Pricing from './Pages/Pricing'
import Teamember from './Pages/Teamember'
const App = () => {
  const [isopen,setIsopen] = useState(false)
  const [theme,setTheme] = useState('home1')
  return (
    <div > 
           <Nav isopen={isopen} setIsopen={setIsopen}/>
           <Menu theme={theme}  isopen={isopen} setIsopen={setIsopen} setTheme={setTheme}/>
        <Routes>
          <Route path='/' element={<Home1 theme={theme} setTheme={setTheme}/>}/>
          <Route path='/home2' element={<Home2 theme={theme} setTheme={setTheme}/>}/>
          <Route path='/about' element={<About theme={theme} setTheme={setTheme}/>}/>
          <Route path='/sessions' element={<Sessions theme={theme} setTheme={setTheme}/>}/>
          <Route path='/contact' element={<Contactus theme={theme} setTheme={setTheme}/>}/>
          <Route path='/ourteam' element={<Ourteam theme={theme} setTheme={setTheme}/>}/>
          <Route path='/pricing' element={<Pricing theme={theme} setTheme={setTheme}/>}/>
          <Route path='/team-member' element={<Teamember theme={theme} setTheme={setTheme}/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App