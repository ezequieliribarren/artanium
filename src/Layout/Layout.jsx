import React from 'react'
import Navbar from '../Components/Nabvar/Navbar'
import Footer from '../Components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout