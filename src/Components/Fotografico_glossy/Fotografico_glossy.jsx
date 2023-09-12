import React from 'react'
import TopProducts from '../TopProducts/TopProducts'
import Slider_products from '../Slider_products/Slider_products';


const Fotografico_glossy = () => {
  return (
    <section id='fotografico-glossy'>
   <TopProducts title="Papel Fotográfico Glossy" subtitle="Transferencia óptima / alta definición." p="Nuestros papeles fotográficos glossy no dejan huella. Viene en varios formatos y gramajes para adaptarse a tus proyectos." li1={<li><strong>Terminación<br />Brillante.</strong></li>} li2={<li><strong>Secado<br />Instantáneo.</strong></li>} li3={<li><strong>Resistente<br />al Agua.</strong></li>} li4={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col-lg-6 detail" clase2= "col-lg-6 description"  />
      
      <Slider_products  img1="images/fotografico/ej6.png" img2="images/fotografico/ej7.png" img3="images/fotografico/ej8.png" img4="images/fotografico/ej9.png" img5="images/fotografico/ej10.png" />

      <div className='flex-column-center'>
        <div><img className='img-fluid' src="images/fotografico/glossy1.png" alt="Papel Fotográfico Glossy" /></div>
        <div> <img className='img-fluid' src="images/fotografico/glossy2.png" alt="Papel Fotográfico Glossy" /></div>
      </div>
    </section>
  )
}

export default Fotografico_glossy