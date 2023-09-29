import React from 'react'
import { papeles } from '../../js/subli';
import Separador from '../Separador/Separador';
import Slider_products from '../Slider_products/Slider_products';

const Subli_papeles = () => {
  return (
    <section id='papeles-sublimacion'>
      <div className="row">
        <div className="col-lg-6 detail" >
          <h2>Papel para Sublimación</h2>
          <h3>Transferencia óptima / alta definición.</h3>
          <p>En Artanium ofrecemos una línea variada de papeles específicos para sublimación, posibilitando un resultado óptimo ya sea en impresiones o en equipos de gran formato. </p>
        </div>
        <div className="col-lg-6 description">
          <ul className='caracteristicas'>
            <li>para <strong>baja, media</strong> <br /> <strong>y alta</strong> descarga</li>
            <li>para <strong>plotter</strong><br />e impresoras</li>
            <li>para<br /><strong>múltiples usos</strong> <br /><span className='none-cel'>(deportivo, moda, rígidos, etc)</span></li>
          </ul>
        </div>
      </div>
      <Separador title="Papeles para sublimación para impresoras" />
      {papeles.map((papel) => (
        <div className="row products" >
          <div className="row contenedor">
            <div className="col-lg-6 left">
              <img className='img-fluid' src={papel.img} alt="Papeles" />
            </div>
            <div className='col-lg-6 right'>
              <div className='products-subtitles'>
                <div>
                  <img src={papel.imgtop} alt="" />{papel.subtitulo1}
                </div>
                <div><h4>{papel.subtitulo}</h4>
                </div>
                <div>
                  {papel.subtitulo2}
                </div>
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <div>
                  <div className='products-a'>
                    <h4><strong>{papel.a1}</strong></h4></div>
                  <div className='products-b'>
                    <p>{papel.b1}</p></div>
                  <div className='products-c'>
                    <img src={papel.c1} alt="" /></div>
                </div>
                <div>
                  <div className='products-a'>
                    <h4><strong>{papel.a2}</strong></h4></div>
                  <div className='products-b'>
                    <p>{papel.b2}</p></div>
                  <div className='products-c'>
                    <img src={papel.c2} alt="" /></div></div>
                <div>
                  <div className='products-a'><h4><strong>{papel.a3}</strong></h4></div>
                  <div className='products-b'><p>{papel.b3}</p></div>
                  <div className='products-c'><img src={papel.c3} alt="" /></div></div>

              </div>
              <div className="line"></div>
            </div>
            <Slider_products img1={papel.d1} img2={papel.d2} img3={papel.d3} img4={papel.d4} img5={papel.d5} ideales={<h4> <strong >Ideales para:</strong></h4>} />
          </div>


        </div>))}
    </section>
  )
}

export default Subli_papeles