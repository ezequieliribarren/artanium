import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Buttons from '../Components/Buttons/Buttons'
import Dtf_products from '../Components/Dtf_products/Dtf_products'
import CallAction from '../Components/CallAction/CallAction'
import CallComunidad from '../Components/CallComunidad/CallComunidad'

const Dtf = () => {
  return (
    <Layout>
      <Hero image="images/Dtf/header.png" mobile="images/subli/header-mobile.png" />
      <Buttons button1={<button>Tintas</button>} button2={<button>Film</button>} button3={<button>Polvo</button>} clase="buttons" />
      <Dtf_products />
      <CallAction/>
      <CallComunidad/>
    </Layout>
  )
}

export default Dtf