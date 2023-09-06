import React from 'react'
import { autoadhesivos } from '../../js/fotografico'
import TopProducts from '../TopProducts/TopProducts'

const Fotografico_autoadhesivo = () => {
    return (
        <section id='fotografico-autoadhesivo'>

            <TopProducts title="Papel Fotográfico Autoadhesivo" subtitle="Alta definición." p="Nuestros papeles autoadhesivos con calidad fotográfica vienen en dos terminaciones superficiales y varios formatos." li3={<li><strong>Secado<br />Rápido.</strong></li>} li4={<li><strong>Resistente<br />al Agua.</strong></li>} li1={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col detail" clase2="col description" />

            {autoadhesivos.map((autoadhesivo) => (
        <div className="row products">
          <div className="row">
            <div className="col">
              <h3>{autoadhesivo.titulo}</h3>
              <img src={autoadhesivo.img} alt="Papeles" />
            </div>
            <div className='col'>
              <div className='products-subtitles'>
                <span className='ico-h4'><img src={autoadhesivo.imgtop} alt="Papeles" /></span>{autoadhesivo.subtitulo1}<h4>{autoadhesivo.subtitulo}</h4>{autoadhesivo.subtitulo2}
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <ul>
                  <li> <div className='products-a'><strong>{autoadhesivo.a1}</strong></div> <div className='products-b'>{autoadhesivo.b1}</div> <div><img src={autoadhesivo.c1} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{autoadhesivo.a2}</strong></div> <div className='products-b'>{autoadhesivo.b2}</div> <div><img src={autoadhesivo.c2} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{autoadhesivo.a3}</strong></div> <div className='products-b'>{autoadhesivo.b3}</div> <div><img src={autoadhesivo.c3} alt="" /></div>  </li>
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