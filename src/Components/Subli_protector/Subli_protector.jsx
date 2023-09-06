import React from 'react'
import Ejemplos from '../Ejemplos/Ejemplos'

const Subli_protector = () => {
  return (
    <section id='subli-protector'>
      <div className="row products">
        <div className="row">
          <div className="col">
            <h3>Rollo 30 gr.</h3>
            <img src="images/subli/plotter/protector.png" alt="Papel Protector para calandra" />
          </div>
          <div className='col'>
            <div className='products-subtitles'>
              <h4>Papel protector de planchas y prensa de calor rotativa para la transferencia en sublimación.</h4>
            </div>
            <div className="line"></div>
            <div className="ul-products">
              <ul>
                <li> <div className='products-a'><strong>Evita daños</strong></div> <div className='products-b'>de la máquina con residuos de tinta.</div> <div><img src="images/subli/plotter/ico-protector.png" alt="" /></div>  </li>
                <li> <div className='products-a'><strong>Protección</strong></div> <div className='products-b'>del fieltro de la prensa de calor rotativa y de los tejidos durante procesos de producción.</div> <div><img src="images/subli/plotter/papel.png" alt="" /></div>  </li>
                <li> <div className='products-a'><strong>Absorción máxima</strong></div> <div className='products-b'>Absorbe las tintas con cargas altas.</div> <div><img src="images/subli/papeles/c2.png" alt="" /></div>  </li>
              </ul>
            </div>
            <div className="line"></div>

          </div>
          <Ejemplos img1="images/subli/plotter/protector1.png" img2="images/subli/plotter/protector2.png" img3="images/subli/plotter/protector3.png" img4="images/subli/plotter/protector3.png" img5="images/subli/plotter/protector4.png" />
        </div>


      </div>
    </section>
  )
}

export default Subli_protector