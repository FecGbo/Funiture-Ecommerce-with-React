import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
     <div className="navbar">
        <div className="navbar-logo">
            <img src="./logo.svg" alt="logo" />
            <span>Furniro</span>
        </div>

        <div className="navbar-toggle" 
        onClick={()=>setMenuOpen((open)=>!open)}>

        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>

        </div>



        <div className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/.product">Product</Link></li>
                <li><Link to="/.aboutus">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                
            </ul>
        </div>

        <div className="navbar-profile">
            <div className="profile">
               <i class="fa-solid fa-circle-user fa-2x"></i>
               
            </div>
             <div className="cart"><i class="fa-solid fa-cart-shopping "></i></div>

        </div>
     </div>
  )
}

export default Navbar