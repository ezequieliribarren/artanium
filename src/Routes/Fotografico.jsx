import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Buttons from '../Components/Buttons/Buttons'
import CallAction from '../Components/CallAction/CallAction'
import Fotografico_mate from '../Components/Fotografico_mate/Fotografico_mate'
import Fotografico_glossy from '../Components/Fotografico_glossy/Fotografico_glossy'
import Fotografico_resinado from '../Components/Fotografico_resinado/Fotografico_resinado'
import Fotografico_magnetico from '../Components/Fotografico_magnetico/Fotografico_magnetico'
import Fotografico_autoadhesivo from '../Components/Fotografico_autoadhesivo/Fotografico_autoadhesivo'

const Fotografico = () => {
  return (
    <Layout>
        <Hero image="images/fotografico/header.png" mobile="images/subli/header-mobile.png"/>
        <Buttons button1= {<button>Tintas</button>} button2={<button>Papeles</button>} clase="buttons-blue"/>
        <CallAction/>
        <Fotografico_mate/>
        <Fotografico_glossy/>
        <Fotografico_resinado/>
        <Fotografico_autoadhesivo/>
        <Fotografico_magnetico/>
  
    </Layout>
  )
}

export default Fotografico