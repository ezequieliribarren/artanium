import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Subli_tintas from '../Components/Subli_tintas/Subli_tintas'
import Subli_papeles from '../Components/Subli_papeles/Subli_papeles'
import CallAction from '../Components/CallAction/CallAction'
import Separador from '../Components/Separador/Separador'
import Subli_plotter from '../Components/Subli_plotter/Subli_plotter'
import Subli_protector from '../Components/Subli_protector/Subli_protector'
import CallComunidad from '../Components/CallComunidad/CallComunidad'
import Buttons from '../Components/Buttons/Buttons'

const Subli = () => {
    return (
        <Layout>
            <Hero  image="images/subli/header.png" mobile="images/subli/header-mobile.png"/>
            <Buttons button1= {<button>Tintas</button>} button2={<button>Papeles</button>} clase="buttons-orange" />
            <Subli_tintas />
            <Subli_papeles />
            <CallAction />
            <Separador title="Papeles para sublimación para plotter" />
            <Subli_plotter/>
            <CallAction/>
            <Separador title="Papel protector para clandra"/>
            <Subli_protector/>
            <CallComunidad/>
        </Layout>
    )
}

export default Subli