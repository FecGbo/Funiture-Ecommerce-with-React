import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'


function App() {
 

  return (
    <>
  
    
    <Router>
 <Navbar/>
  <Routes>
     <Route path=''></Route>
  </Routes>



    </Router>

      </>

  
  )
}

export default App
