import React from 'react'
import { plotters } from '../../js/subli';

const Subli_plotter = () => {
  return (
    <section id='subli-plotter'>
<div className='plotter-banner'>
    <img src="images/subli/plotter/banner.png" alt="Banner-Plotter" />
</div>

{plotters.map((plotter) => (
        <div className="row products">
          <div className="row">
            <div className="col">
              <h3>{plotter.titulo}</h3>
              <img src={plotter.img} alt="Plotter" />
            </div>
            <div className='col'>
              <div className='subli-products-subtitles'>
                <span className='ico-h4'><img src={plotter.imgtop} alt="Plotter" /></span>{plotter.subtitulo1}<h4>{plotter.subtitulo}</h4>{plotter.subtitulo2}
              </div>
              <div className="line"></div>
              <div className="ul-subli">
                <ul>
                  <li> <div className='subli-a'><strong>{plotter.a1}</strong></div> <div className='subli-b'>{plotter.b1}</div> <div><img src={plotter.c1} alt="" /></div>  </li>
                  <li> <div className='subli-a'><strong>{plotter.a2}</strong></div> <div className='subli-b'>{plotter.b2}</div> <div><img src={plotter.c2} alt="" /></div>  </li>
                  <li> <div className='subli-a'><strong>{plotter.a3}</strong></div> <div className='subli-b'>{plotter.b3}</div> <div><img src={plotter.c3} alt="" /></div>  </li>
                </ul>
              </div>
              <div className="line"></div>

            </div>
            <div className="row">
              <ul className='subli-ejemplos'>
                <li>Ideales para:</li>
                <li><img src={plotter.d1} alt="Ejemplos" /></li>
                <li><img src={plotter.d2} alt="Ejemplos" /></li>
                <li><img src={plotter.d3} alt="Ejemplos" /></li>
                <li><img src={plotter.d4} alt="Ejemplos" /></li>
                <li><img src={plotter.d5} alt="Ejemplos" /></li>
              </ul>
            </div>
          </div>


        </div>))}
    </section>
  )
}

export default Subli_plotter