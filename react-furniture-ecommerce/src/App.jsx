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
import Contact from './components/Contact'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import CartProvider from './components/ProductCard/CartProvider'


import SuccessMessage from './components/ProductCard/SuccessMessage';
import BagPage from './components/ProductCard/BagPage'
import Checkout from './components/CheckOut/Checkout'
import AdminLayout from './components/Admin/Components/AdminLayout'
import Dashboard from './components/Admin/Pages/Dashboard'
import Order from './components/Admin/Pages/Order'
import PublicLayout from './components/PublicLayout'
import Customer from './components/Admin/Pages/Customer'




function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const [showSuccess,setShowSuccess]=useState(false);
 

  return (
    <>
        {showSuccess && <SuccessMessage />}
  <CartProvider>
    
  <Router>

  <Routes>
    <Route element={<PublicLayout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
      <Route path='/' element={<Home setShowSuccess={setShowSuccess} />}></Route>
      <Route path='/.product' element={<Productpage setShowSuccess={setShowSuccess} />}></Route>
     <Route path='/.aboutus' element={<Aboutus/>}></Route>
     <Route path='/.contact' element={<Contact/>}></Route>
   <Route path='/.login' element={<Login setLoggedIn={setLoggedIn} />} />
   <Route path='/.register' element={<Register/>} />

   <Route path='/.bag' element={<BagPage/>} />
   <Route path='/.checkout' element={<Checkout/>} />

    </Route>





   <Route element={<AdminLayout />}>
   
   
     <Route path="/admin/dashboard" element={<Dashboard />} />
     <Route path="/admin/orders" element={<Order />} />
     <Route path="/admin/customers" element={<Customer />} />
   </Route>





     
  </Routes>



    </Router>
    </CartProvider>

    {/* <Footer/> */}
  

      </>

  
  )
}

export default App
