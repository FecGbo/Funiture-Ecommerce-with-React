import React from 'react'
import '../css/Header.css';

function Header({isShowingSidebar, setIsShowingSidebar}) {

  return (
    <div className="admin-header">
      <div className="admin-header-left">
        <div className="navbar-btn">
          <button className='nav-toggle' onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <span style={{fontWeight:'bold'}}>Furnio Dashboard</span>

      </div>

      <div className="admin-header-right">
        <div className="ad-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search here...' />
        </div>
          <div className="ad-profile">
            <span>Femi John</span>
            <div className="ad-profile-img">
              <img src="/slider-img/founder.png" alt="" width={40} height={40}/>
            </div>
          </div>



      </div>


    </div>
  )
}

export default Header