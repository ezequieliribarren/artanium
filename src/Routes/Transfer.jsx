import { useEffect } from 'react'
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
import { HashLink as Link } from 'react-router-hash-link';
import Linea from '../Components/Linea/Linea'




const Transfer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Hero image="images/transfer/header.png" tablet="images/transfer/header-tablet.png" mobile="images/transfer/header-mobile.png" />
      <Buttons button1={<Link className="nav-link" smooth to="/transfer/#tintas-transfer"><button>Tintas</button>
      </Link>} button2={<Link className="nav-link" smooth to='/transfer/#papeles-transfer'>
        <button>Papeles</button>
      </Link>} clase="buttons-pink" />
      <Separador2 titulo="Tintas Pigmentadas" subtitulo="Compatibles con impresoras inkjet" />
      <Separador3 titulo="Compatibles con impresoras Epson:" />
      {product_azul.map((product) => (
        <Product_azul img={product.img} a1={product.a1} a2={product.a2} a3={product.a3} b1={product.b1} b2={product.b2} b3={product.b3} c1={product.c1} c2={product.c2} c3={product.c3} clase={product.clase} imgtop1={product.imgtop1} imgtop2={product.imgtop2} imgtop3={product.imgtop3} imgtop4={product.imgtop4} ideales={<h4> <strong>Ideales para:</strong> <br />
          transfer, stikers, etiquetas, documentos</h4>} slider1="images/transfer/slider1.png" slider2="images/transfer/slider2.png" slider3="images/transfer/slider3.png" slider4="images/transfer/slider4.png" slider5="images/transfer/slider5.png" />
      ))}
      <Linea/>
      <Transfer_products />
      <CallAction />
      <CallComunidad />
    </Layout>


  )
}

export default Transfer