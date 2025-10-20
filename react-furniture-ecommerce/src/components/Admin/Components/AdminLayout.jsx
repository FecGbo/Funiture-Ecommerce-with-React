import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import '../css/adminlayout.css'
function AdminLayout() {
    
  const [isShowingSidebar, setIsShowingSidebar] = React.useState(true);

  return (
    <div className="admin-app">
      <Sidebar className="admin-sidebar" isShowingSidebar={isShowingSidebar} />



      <div className="admin-main">
        <Header className="admin-header" 
         isShowingSidebar={isShowingSidebar} 
         setIsShowingSidebar={setIsShowingSidebar} />
           <main className="admin-body" style={{ backgroundColor: '#eef2f7' ,padding:'20px',color:'black',height:'100vh'}}>
          <Outlet />
       </main>
        {/* <main className="admin-body">
        
        </main> */}
      </div>
    </div>
  )
}

export default AdminLayout