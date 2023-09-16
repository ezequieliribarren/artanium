import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Buttons from '../Components/Buttons/Buttons'
import CallAction from '../Components/CallAction/CallAction'
import CallComunidad from '../Components/CallComunidad/CallComunidad'
import Transfer_products from '../Components/Transfer_products/Transfer_products'
import Separador2 from '../Components/Separador2/Separador2'
import Separador3 from '../Components/Separador3/Separador3'
import Product_azul from '../Components/Product_azul/Product_azul'
import { product_azul } from '../js/transfer'




const Transfer = () => {
  return (
    <Layout>
        <Hero image="images/transfer/header.png" mobile="images/subli/header-mobile.png"/>
        <Buttons button1= {<button>Tintas</button>} button2={<button>Papeles</button>} clase="buttons-pink" />
        <Separador2 titulo="Tintas Pigmentadas" subtitulo="Compatibles con impresoras inkjet"/>
        <Separador3 titulo="Compatibles con impresoras Epson:"/>
        {product_azul.map((product) => (
        <Product_azul img={product.img} a1={product.a1} a2={product.a2} a3={product.a3} b1={product.b1} b2={product.b2} b3={product.b3} c1={product.c1} c2={product.c2} c3={product.c3} clase={product.clase} />
        ))}
        <Transfer_products/>
        <CallAction/>
        <CallComunidad/>

    </Layout>


  )
}

export default Transfer