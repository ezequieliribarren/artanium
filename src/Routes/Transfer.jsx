import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Buttons from '../Components/Buttons/Buttons'
import CallAction from '../Components/CallAction/CallAction'
import CallComunidad from '../Components/CallComunidad/CallComunidad'
import Transfer_products from '../Components/Transfer_products/Transfer_products'

const Transfer = () => {
  return (
    <Layout>
        <Hero image="images/transfer/header.png"/>
        <Buttons button1= {<button>Tintas</button>} button2={<button>Papeles</button>} clase="buttons-pink" />
        <CallAction/>
        <Transfer_products/>
        <CallAction/>
        <CallComunidad/>

    </Layout>


  )
}

export default Transfer