import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Ser_distribuidor from '../Components/Ser_distribuidor/Ser_distribuidor'
import Contacto from '../Components/Contacto/Contacto'

const Ser_parte = () => {
    return (
        <Layout>
            <Hero image="images/distribuidores/header.png" mobile="images/subli/header-mobile.png" />
            <Ser_distribuidor/>
            <Contacto />
        </Layout>
    )
}

export default Ser_parte