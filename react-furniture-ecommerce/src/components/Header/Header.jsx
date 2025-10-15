import React from 'react'
import './header.css'

function Header({pageName}) {
  return (
    <div className='header-background'>

        <div className="header-text">
       <span>{pageName}</span>
        <p><span-1 style={{fontWeight:"bold"}}>Home ＞ </span-1>{pageName}</p>
        </div>
      
      
 

    </div>
  )
}

export default Header