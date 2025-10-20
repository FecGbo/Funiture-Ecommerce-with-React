import React from "react";
import { Link } from "react-router-dom";
import '../css/sidebar.css';
import { NavLink } from "react-router-dom";


function Sidebar({isShowingSidebar=true}) {
  return (
    <>
    

    <div className={`admin-sidebar ${isShowingSidebar ? '' : 'collapsed'}`}>


      <div className="ad-logo">
        <img src="/logo.svg" alt="logo" />
      </div>



      <div className="ad-sidebar-list">

      
   
          <div className="sidebar-logo">
            <i className="fa-solid fa-gauge"></i>
            <span><Link to="/admin/dashboard">Dashboard</Link></span>
          </div>

          <div className="sidebar-logo">
            <i className="fa-solid fa-gauge"></i>
            <span><Link to="/admin/orders">Orders</Link></span>
          </div>

          <div className="sidebar-logo">
            <i className="fa-solid fa-gauge"></i>
            <span><Link to="/admin/customers">Customers</Link></span>
          </div>

          <div className="sidebar-logo">
            <i className="fa-solid fa-gauge"></i>
            <span><Link to="/">Users</Link></span>
          </div>


          
          <div className="sidebar-logo">
            <i className="fa-solid fa-gauge"></i>
            <span><Link to="/">Categories</Link></span>
          </div>

          <div className="sidebar-logo">
            <i className="fa-solid fa-gauge"></i>
            <span><Link to="/">Products</Link></span>
          </div>       
        </div>




            <div className="admin-profile">
        <img src="/slider-img/founder.png" alt="" />
        <span>Furnio Owner</span>
        <span>Mr.Kelvin</span>
       
      </div>








      </div>

  




        </>
    
  );
}

export default Sidebar;
