import { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Buttons from '../Components/Buttons/Buttons'
import CallAction from '../Components/CallAction/CallAction'
import Fotografico_mate from '../Components/Fotografico_mate/Fotografico_mate'
import Fotografico_glossy from '../Components/Fotografico_glossy/Fotografico_glossy'
import Fotografico_resinado from '../Components/Fotografico_resinado/Fotografico_resinado'
import Fotografico_magnetico from '../Components/Fotografico_magnetico/Fotografico_magnetico'
import Fotografico_autoadhesivo from '../Components/Fotografico_autoadhesivo/Fotografico_autoadhesivo'
import { HashLink as Link } from 'react-router-hash-link';
import Product_azul from '../Components/Product_azul/Product_azul'
import { product_azul, product_azul_pigmentada } from '../js/fotografico'
import Separador2 from '../Components/Separador2/Separador2'
import Separador3 from '../Components/Separador3/Separador3'
import Linea from '../Components/Linea/Linea'

const Fotografico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <Hero image="images/fotografico/header.png" tablet="images/fotografico/header-tablet.png" mobile="images/fotografico/header-mobile.png" />
      <Buttons button1={<Link className="nav-link" smooth to="/fotografico/#tintas-fotografico"><button>Tintas</button>
      </Link>} button2={<Link className="nav-link" smooth to='/fotografico/#papeles-fotografico'>
        <button>Papeles</button>
      </Link>} clase="buttons-blue" />
      <Separador2 titulo="Tintas Inkjet" subtitulo="Para impresoras Inkjet" />
      <Separador3 titulo="Compatibles con impresoras Epson:" />
      {product_azul.map((product) => (
        <Product_azul title={product.titulo} img={product.img} a1={product.a1} a2={product.a2} a3={product.a3} b1={product.b1} b2={product.b2} b3={product.b3} c1={product.c1} c2={product.c2} c3={product.c3} clase={product.clase} imgtop1={product.imgtop1} imgtop2={product.imgtop2} imgtop3={product.imgtop3} imgtop4={product.imgtop4} ideales={<h4> <strong>Ideales para:</strong><br />fotografía</h4>} slider1="images/fotografico/slider1.png" slider2="images/fotografico/slider2.png" slider3="images/fotografico/slider3.png" slider4="images/fotografico/slider4.png" slider5="images/fotografico/slider5.png" />
      ))}
       {product_azul_pigmentada.map((product) => (
        <Product_azul title={product.titulo} img={product.img} a1={product.a1} a2={product.a2} a3={product.a3} b1={product.b1} b2={product.b2} b3={product.b3} c1={product.c1} c2={product.c2} c3={product.c3} clase={product.clase} imgtop1={product.imgtop1} imgtop2={product.imgtop2} imgtop3={product.imgtop3} imgtop4={product.imgtop4} ideales={<h4> <strong>Ideales para:</strong><br />fotografía</h4>} slider1="images/transfer/slider1.png" slider2="images/transfer/slider2.png" slider3="images/transfer/slider3.png" slider4="images/transfer/slider4.png" slider5="images/transfer/slider5.png" />
      ))}
      <Linea/>
      <Fotografico_mate />
      <Fotografico_glossy />
      <Fotografico_resinado />
      <Fotografico_autoadhesivo />
      <Fotografico_magnetico />
      <CallAction />
    </Layout>
  )
}

export default Fotografico