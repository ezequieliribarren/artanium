import React from 'react'
import Layout from '../Layout/Layout'
import Productos from '../Components/Productos/Productos'
import Nosotros from '../Components/Nosotros/Nosotros'
import Distribuidores from '../Components/Distribuidores/Distribuidores'
import Header from '../Components/Header/Header'
import Contacto from '../Components/Contacto/Contacto'

const Root = () => {
  return (
    <>
      <Layout>
        <Header />
        <Productos />
        <Nosotros />
        <Distribuidores />
        <Contacto/>
      </Layout>
    </>
  )
}

export default Root