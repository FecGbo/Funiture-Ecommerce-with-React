import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react';
import { CartContext } from '../ProductCard/CartProvider';
import CartModal from '../ProductCard/CartModal';



function Navbar({loggedIn,setLoggedIn}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const {cart}=useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    const handleCloseMenu=()=>setMenuOpen(false);

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="./logo.svg" alt="logo" />
                <span>Furniro</span>
            </div>

        

            <div className={`navbar-list ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={handleCloseMenu}>Home</Link></li>
                    <li><Link to="/.product" onClick={handleCloseMenu}>Product</Link></li>
                    <li><Link to="/.aboutus" onClick={handleCloseMenu}>About</Link></li>
                    <li><Link to="/.contact" onClick={handleCloseMenu}>Contact</Link></li>

                    {menuOpen && !loggedIn &&(

                    <li ><Link to='/.login' onClick={handleCloseMenu}>Login</Link></li>)

}
                   
                </ul>
            </div>

          <div className="navbar-profile">
        {loggedIn ? (
    <div className="profile" style={{ position: 'relative' }}>
      <button onClick={() => setShowProfile((prev) => !prev)}>
        <i className="fa-solid fa-circle-user fa-2x"></i>
      </button>
      {showProfile && (
        <div className="profile-modal">
          <ul>
            <li>
              <button onClick={() =>{ 
                setLoggedIn(false);
                setShowProfile(false);
                }}>Logout</button>
            </li>
            <li>
              <button onClick={() => setShowProfile(false)}>Close</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  ) : (
    <Link to="/.login" onClick={handleCloseMenu} className='login-btn'>
     
        <i className="fa-solid fa-sign-in"></i> Log In
    
    </Link>
  )}
  <div className="cart" style={{ position: 'relative', marginLeft: '20px' }}>


  
       <i className="fa-solid fa-cart-shopping" onClick={() => setShowCart(s => !s)}></i>
          {cart.length > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '0.8rem',
                width: '20px',
                height: '20px',
                textAlign: 'center'
              }}
              className='cart-count'
            >
              {cart.length}
            </span>
          )}
          {showCart && <CartModal cart={cart} closeModal={() => setShowCart(false)} />}

              <div className="navbar-toggle" onClick={() => setMenuOpen((open) => !open)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
  
  </div>
</div>






        </div>
    )
}

export default Navbar