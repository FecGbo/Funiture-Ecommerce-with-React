import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home'
import Productpage from './components/Productpage'
import Footer from './components/Footer/Footer'
import Aboutus from './components/Aboutus'



function App() {
 

  return (
    <>
  
    
  <Router>
 <Navbar/>
  <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/.product' element={<Productpage/>}></Route>
     <Route path='/.aboutus' element={<Aboutus/>}></Route>
     
  </Routes>



    </Router>

    <Footer/>
  

      </>

  
  )
}

export default App
