import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../Shared/Footer/Footer'
import NavBar from '../Shared/NavBar/NavBar'

export const MainLayout = () => {

  const location = useLocation()

  const noHeaderFooter = location.pathname.includes("login") ||  location.pathname.includes("signUp")
  return (
    <div className=''>
      {noHeaderFooter ||  <NavBar /> }
       
        <div className=' min-h-[120vh]'>
          <Outlet />
        </div>
        {noHeaderFooter ||  <Footer /> }
        
    </div>
  )
}
