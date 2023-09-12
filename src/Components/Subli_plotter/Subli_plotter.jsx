import React from 'react'
import { plotters } from '../../js/subli';
import Slider_products from '../Slider_products/Slider_products';

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
              <img className='img-fluid' src={plotter.img} alt="Plotter" />
            </div>
            <div className='col-lg-6'>
              <div className='products-subtitles'>
                {plotter.subtitulo1}<h4>{plotter.subtitulo}</h4>{plotter.subtitulo2}
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <div>
                  <div className='products-a'>
                    <h4><strong>{plotter.a1}</strong></h4></div>
                  <div className='products-b'>
                    <p>{plotter.b1}</p></div>
                  <div className='products-c'>
                    <img src={plotter.c1} alt="" /></div>
                </div>
                <div>
                  <div className='products-a'>
                    <h4><strong>{plotter.a2}</strong></h4></div>
                  <div className='products-b'>
                    <p>{plotter.b2}</p></div>
                  <div className='products-c'>
                    <img src={plotter.c2} alt="" /></div></div>

                <div>
                  <div className='products-a'><h4><strong>{plotter.a3}</strong></h4></div>
                  <div className='products-b'><p>{plotter.b3}</p></div>
                  <div className='products-c'><img src={plotter.c3} alt="" /></div></div>

              </div>
              <div className="line"></div>

            </div>
            <Slider_products img1={plotter.d1} img2={plotter.d2} img3={plotter.d3} img4={plotter.d4} img5={plotter.d5} />
          </div>


        </div>))}
    </section>
  )
}

export default Subli_plotter