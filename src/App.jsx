import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Contact' element={<Contact />}/>


    </Routes>
    
    
    
    
    </BrowserRouter>
      
    
  )
}

export default App
