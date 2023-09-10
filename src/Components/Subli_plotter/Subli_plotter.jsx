import React from 'react'
import { plotters } from '../../js/subli';
import Ejemplos from '../Ejemplos/Ejemplos';

const Subli_plotter = () => {
  return (
    <section id='subli-plotter'>
      <div className='plotter-banner'>
        <img className='img-fluid' src="images/subli/plotter/banner.png" alt="Banner-Plotter" />
      </div>

      {plotters.map((plotter) => (
        <div className="row products">
          <div className="row">
            <div className={plotter.clase}>
              <div className='title-products'>
                <h3>{plotter.titulo}</h3>
                <div className='ico-h4'><img src={plotter.imgtop} alt="Plotter" /></div>
              </div>
              <img className='img-fluid' src={plotter.img} alt="Plotter" />
            </div>
            <div className='col-lg-6'>
              <div className='products-subtitles'>
                {plotter.subtitulo1}<h4>{plotter.subtitulo}</h4>{plotter.subtitulo2}
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <ul>
                  <li> <div className='products-a'><strong>{plotter.a1}</strong></div> <div className='products-b'>{plotter.b1}</div> <div className='products-c'><img src={plotter.c1} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{plotter.a2}</strong></div> <div className='products-b'>{plotter.b2}</div> <div className='products-c'><img src={plotter.c2} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{plotter.a3}</strong></div> <div className='products-b'>{plotter.b3}</div> <div className='products-c'><img src={plotter.c3} alt="" /></div>  </li>
                </ul>
              </div>
              <div className="line"></div>

            </div>
            <Ejemplos img1={plotter.d1} img2={plotter.d2} img3={plotter.d3} img4={plotter.d4} img5={plotter.d5} />
          </div>


        </div>))}
    </section>
  )
}

export default Subli_plotter