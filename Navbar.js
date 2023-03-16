import React from 'react'

import { Outlet, Link, useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation();
    
  return (
    <>

  <div style={{ display:"flex", flexDirection:"row"}}>
 <div className=" nav flex-column nav-pills me-3 w-25 vh-100 p-3 m-2 bg-dark text-white" >
 <h3 className='text-center'>NKTechnologies</h3>
    <Link className={location.pathname=='/train'?' pill':'nav-link'} to="train" id="v-pills-profile-tab" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Home</Link>
    <Link className={location.pathname=='/chats'?' pill':'nav-link'} to="chats" id="v-pills-messages-tab"  data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Chat</Link>
    <Link className={location.pathname=='/admin'?' pill':'nav-link'} to="admin" id="v-pills-settings-tab"  data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Admin</Link>
       
    </div> 
  <Outlet />
  </div>
  

 </>

    
  )
}

export default Navbar