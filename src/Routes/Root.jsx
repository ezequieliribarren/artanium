import React from 'react'
import Layout from '../Layout/Layout'
import Productos from '../Components/Productos/Productos'
import Nosotros from '../Components/Nosotros/Nosotros'
import Distribuidores from '../Components/Distribuidores/Distribuidores'

const Root = () => {
  return (
    <>
      <Layout>
        <Productos />
        <Nosotros />
        <Distribuidores />
      </Layout>
    </>
  )
}

export default Root