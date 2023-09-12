import React from 'react'
import { autoadhesivos } from '../../js/fotografico'
import TopProducts from '../TopProducts/TopProducts'

const Fotografico_autoadhesivo = () => {
  return (
    <section id='fotografico-autoadhesivo'>

      <TopProducts title="Papel Fotográfico Autoadhesivo" subtitle="Alta definición." p="Nuestros papeles autoadhesivos con calidad fotográfica vienen en dos terminaciones superficiales y varios formatos." li3={<li><strong>Secado<br />Rápido.</strong></li>} li4={<li><strong>Resistente<br />al Agua.</strong></li>} li1={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col-lg-6 detail" clase2="col-lg-6 description" />

      {autoadhesivos.map((autoadhesivo) => (
        <div className="row products">
          <div className="row">
            <div className="col-lg-6">
              <div className='title-products'>
                <h3>{autoadhesivo.titulo}</h3>
                <span className='ico-h4'><img src={autoadhesivo.imgtop} alt="Papeles" /></span>
              </div>

              <img src={autoadhesivo.img} alt="Papeles" />
            </div>
            <div className='col-lg-6'>
              <div className='products-subtitles'>
                <h4>{autoadhesivo.subtitulo}</h4>
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <ul>
                  <li> <div className='products-a'><strong>{autoadhesivo.a1}</strong></div> <div className='products-b'>{autoadhesivo.b1}</div> <div className='products-c'><img src={autoadhesivo.c1} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{autoadhesivo.a2}</strong></div> <div className='products-b'>{autoadhesivo.b2}</div> <div className='products-c'><img src={autoadhesivo.c2} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{autoadhesivo.a3}</strong></div> <div className='products-b'>{autoadhesivo.b3}</div> <div className='products-c'><img src={autoadhesivo.c3} alt="" /></div>  </li>
                </ul>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>))}



    </section>
  )
}

export default Fotografico_autoadhesivo