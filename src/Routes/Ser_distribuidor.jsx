import React, { useEffect } from 'react';
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Ser_distribuidor from '../Components/Ser_distribuidor/Ser_distribuidor'
import Contacto from '../Components/Contacto/Contacto'

const Ser_parte = () => {
        useEffect(() => {
        window.scrollTo(0, 0); 
      }, []); 
    return (
        <Layout>
            <Hero image="images/distribuidores/header.png" tablet="images/distribuidores/header-tablet.png" mobile="images/distribuidores/header-mobile.png" />
            <Ser_distribuidor/>
            <Contacto />
        </Layout>
    )
}

export default Ser_parte