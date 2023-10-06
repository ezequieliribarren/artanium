import React from 'react'
import Slider_products from '../Slider_products/Slider_products'

const Subli_protector = () => {
  return (
    <section id='subli-protector'>
      <div className="row products">
        <div className="row contenedor">
          <div className="col-lg-6 left">
            <img className='img-fluid' src="images/subli/plotter/protector.png" alt="Papel Protector para calandra" />
          </div>
          <div className='col-lg-6 right'>
            <div className='products-subtitles'>
              <h4 className='h4-protector'>Papel protector de planchas y prensa de calor rotativa para la transferencia en sublimación.</h4>
            </div>
            <div className="line"></div>
            <div className="ul-products">
              <div>
                <div className='products-a'><h4><strong>Evita daños</strong></h4></div>
                <div className='products-b'> <p>de la máquina con residuos de tinta.</p></div>
                <div className='products-c'><img src="images/subli/plotter/ico-protector.png" alt="" /></div>  </div>
              <div>
                <div className='products-a'><h4><strong>Protección</strong></h4></div>
                <div className='products-b'><p>del filtro de la prensa de calor rotativa y de los tejidos durante procesos de producción.</p></div>
                <div className='products-c'><img src="images/subli/plotter/papel.png" alt="" /></div>
              </div>
              <div>
                <div className='products-a'><h4><strong>Absorción máxima</strong></h4></div>
                <div className='products-b'><p>Absorbe las tintas con cargas altas.</p></div>
                <div className='products-c'><img src="images/subli/papeles/c2.png" alt="" /></div>
              </div>

            </div>
            <div className="line"></div>

          </div>
          <Slider_products img1="images/subli/plotter/protector1.png" img2="images/subli/plotter/protector2.png" img3="images/subli/plotter/protector3.png" img4="images/subli/plotter/protector3.png" img5="images/subli/plotter/protector4.png" ideales={<h4> <strong >Ideales para:</strong></h4>}  />
        </div>


      </div>
    </section>
  )
}

export default Subli_protector