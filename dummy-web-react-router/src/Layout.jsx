import React from 'react'
import Header from './components/Header/Header' ;
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>

    </>
  )
}
