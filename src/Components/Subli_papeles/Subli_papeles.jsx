import React from 'react'
import { papeles } from '../../js/subli';
import Separador from '../Separador/Separador';
import Ejemplos from '../Ejemplos/Ejemplos';

const Subli_papeles = () => {
  return (
    <section id='papeles-sublimacion'>
      <div className="row">
        <div className="col-lg-6 detail">
          <h2>Papel para Sublimación</h2>
          <h3>Transferencia óptima / alta definición.</h3>
          <p>En Artanium ofrecemos una línea variada de papeles específicos para sublimación, posibilitando un resultado óptimo ya sea en impresiones o en equipos de gran formato. </p>
        </div>
        <div className="col-lg-6 description">
          <ul className='caracteristicas'>
            <div className='lis-caracteristicas'>
              <li>para <strong>baja, media</strong> <br /> <strong>y alta</strong> descarga</li>
            </div>
            <div className='lis-caracteristicas'>
              <li>para <strong>plotter</strong><br />e impresoras</li>
              <li>para <strong>múltiples usos</strong> <br /><span className='none-cel'>(deportivo, moda, rígidos, etc)</span></li>
            </div>
          </ul>
        </div>
      </div>
      <Separador title="Papeles para sublimación para impresoras" />
      {papeles.map((papel) => (
        <div className="row products">
          <div className="row">
            <div className={papel.clase}>
              <div className='title-products'>
                <h3>{papel.titulo}</h3>
                <div className='ico-h4'><img src={papel.imgtop} alt="Papeles" /></div>
              </div>
              <img className='img-fluid' src={papel.img} alt="Papeles" />
            </div>
            <div className='col-lg-6'>
              <div className='products-subtitles'>
                {papel.subtitulo1}<h4>{papel.subtitulo}</h4>{papel.subtitulo2}
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <ul>
                  <li>
                    <div className='products-a'><strong>{papel.a1}</strong></div>
                    <div className='products-b'><p>{papel.b1}</p></div>
                    <div className='products-c'><img src={papel.c1} alt="" /></div>
                  </li>
                  <li> <div className='products-a'><strong>{papel.a2}</strong></div> <div className='products-b'>{papel.b2}</div> <div className='products-c'><img src={papel.c2} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{papel.a3}</strong></div> <div className='products-b'>{papel.b3}</div> <div className='products-c'><img src={papel.c3} alt="" /></div>  </li>
                </ul>
              </div>
              <div className="line"></div>
            </div>
            <Ejemplos img1={papel.d1} img2={papel.d2} img3={papel.d3} img4={papel.d4} img5={papel.d5} />
          </div>


        </div>))}
    </section>
  )
}

export default Subli_papeles