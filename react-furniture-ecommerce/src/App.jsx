import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import ImageSlider from './components/ImageSlider'
import Bestselling from './components/BestSelling/Bestselling'
import Latestsale from './components/BestSelling/Latestsale'
import Midsection from './components/Midsection/Midsection'


function App() {
 

  return (
    <>
  
    
    <Router>
 <Navbar/>
  <Routes>
     <Route path=''></Route>
  </Routes>



    </Router>
    <ImageSlider/>



    <Latestsale/>
        <Midsection/>
    <Bestselling/>

      </>

  
  )
}

export default App
