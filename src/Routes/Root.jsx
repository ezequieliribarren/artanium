import { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Productos from '../Components/Productos/Productos'
import Nosotros from '../Components/Nosotros/Nosotros'
import Distribuidores from '../Components/Distribuidores/Distribuidores'
import Header from '../Components/Header/Header'
import Contacto from '../Components/Contacto/Contacto'
import Forma_parte from '../Components/Forma_parte/Forma_parte'

const Root = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 
  return (
    <>
      <Layout>
        <Header />
        <Productos />
        <Nosotros />
        <Distribuidores />
        <Forma_parte/>
        <Contacto/>
      </Layout>
    </>
  )
}

export default Root