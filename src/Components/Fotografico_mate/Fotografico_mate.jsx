import React from 'react'
import TopProducts from '../TopProducts/TopProducts'
import Slider_products from '../Slider_products/Slider_products'

const Fotografico_mate = () => {
  return (
    <section id='fotografico-mate'>

{/* FOTOGRAFICO MATE */}
      <TopProducts title="Papel Fotográfico Mate" subtitle="Transferencia óptima / alta definición." p="Lográ plenos parejos con nuestro papel fotográfico mate. Viene en varios formatos y gramajes para adaptarse a tus proyectos." li1={<li><strong>Terminación<br />mate</strong></li>} li2={<li><strong>Secado<br />Instantáneo.</strong></li>} li3={<li><strong>Resistente<br />al Agua.</strong></li>} li4={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col-lg-6 detail" clase2= "col-lg-6 description" caracteristicas="caracteristicas" />

    

      <div className="flex-center">
        <div className="row">
             <div className='col-md-6'><img className='img-fluid' src="images/fotografico/mate1.png" alt="Papel Fotográfico mate" /></div>
        <div className='col-md-6'> <img className='img-fluid'  src="images/fotografico/mate2.png" alt="Papel Fotográfico mate" /></div>
        </div>
      </div>
     <Slider_products  img1="images/fotografico/ej1.png" img2="images/fotografico/ej2.png" img3="images/fotografico/ej3.png" img4="images/fotografico/ej4.png" img5="images/fotografico/ej5.png" ideales={<h4> <strong >Ideales para:</strong> <br /> candybar, folletos, presentaciones, scrapbooking, etc.</h4>} />
    </section>
  )
}

export default Fotografico_mate