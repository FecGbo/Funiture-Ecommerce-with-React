import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function PublicLayout({loggedIn, setLoggedIn}) {
  return (
  <>
  <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
  <main>
    <Outlet />
  </main>
  <Footer />
  
  </>
  )
}

export default PublicLayout