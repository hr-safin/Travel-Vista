import React from 'react'

import { Outlet } from 'react-router-dom'
import { Footer } from '../Shared/Footer/Footer'
import NavBar from '../Shared/NavBar/NavBar'

export const MainLayout = () => {
  return (
    <div className=''>
        <NavBar />
        <div className=' min-h-[120vh]'>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}
