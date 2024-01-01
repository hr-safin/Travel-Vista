import React from 'react'
import { NavBar } from '../Shared/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Shared/Footer/Footer'

export const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}
