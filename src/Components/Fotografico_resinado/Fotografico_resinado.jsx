import React from 'react'
import TopProducts from '../TopProducts/TopProducts'
import { resinados } from '../../js/fotografico';

const Fotografico_resinado = () => {
  return (
    <section id='fotografico-resinado'>
{/* FOTOGRAFICO RESINADO  */}
<TopProducts title="Papel Fotográfico Resinado" subtitle="Excelente calidad, perdurable en el tiempo." p="Nuestros resinadoes fotográficos resinados te permitirán llevar tus fotografías e impresiones a otro nivel. Vienen en 3 variantes según la terminación de su superficie, ofreciendo características estéticas y funcionales diversas que pueden adaptarse a diferentes tipos de imágenes y proyectos." li3={<li><strong>Superficie<br />Anti Huella</strong></li>} li2={<li><strong>Secado<br />Rápido.</strong></li>} li4={<li><strong>Resistente<br />al Agua.</strong></li>} li1={<li><strong>Alta <br />Resolución.</strong></li>} li5={<li><strong>Dorso<br />Suave</strong></li>} li6={<li><strong>Alta <br />Durabilidad.</strong></li>} li7={<li><strong>Grán<br />Flexibilidad</strong></li>} clase1="col-xl-6 detail" clase2= "col-xl-6 description"/>

{resinados.map((resinado) => (
        <div className="row products">
          <div className="row contenedor">
            <div className="col-lg-6 img-products"> 
              <img className='img-fluid'  src={resinado.img} alt="Papeles" />
            </div>
            <div className='col-lg-6'>
              <div className='products-subtitles'>
                <h4>{resinado.subtitulo}</h4>
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <div>
                  <div className='products-a'>
                    <h4><strong>{resinado.a1}</strong></h4></div>
                  <div className='products-b'>
                    <p>{resinado.b1}</p></div>
                  <div className='products-c'>
                    <img src={resinado.c1} alt="" /></div>
                </div>
                <div>
                  <div className='products-a'>
                    <h4><strong>{resinado.a2}</strong></h4></div>
                  <div className='products-b'>
                    <p>{resinado.b2}</p></div>
                  <div className='products-c'>
                    <img src={resinado.c2} alt="" /></div></div>
                <div>
                  <div className='products-a'><h4><strong>{resinado.a3}</strong></h4></div>
                  <div className='products-b'><p>{resinado.b3}</p></div>
                  <div className='products-c'><img src={resinado.c3} alt="" /></div></div>

              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>))}


    </section>
  )
}

export default Fotografico_resinado