import React from 'react'
import TopProducts from '../TopProducts/TopProducts'
import { magneticos } from '../../js/fotografico';

const Fotografico_magnetico = () => {
  return (
    <section id='fotografico-magnetico'>
 <TopProducts title="Papel Fotográfico Magnético" subtitle="Alta definición." p="Nuestros papeles magnéticos con calidad fotográfica vienen en dos terminaciones superficiales."  li2={<li><strong>Secado<br />Rápido.</strong></li>} li3={<li><strong>Resistente<br />al Agua.</strong></li>} li4={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col detail" clase2= "col description" />

 {magneticos.map((magnetico) => (
        <div className="row products">
          <div className="row">
            <div className="col">
              <h3>{magnetico.titulo}</h3>
              <img src={magnetico.img} alt="Papeles" />
            </div>
            <div className='col'>
              <div className='products-subtitles'>
                <span className='ico-h4'><img src={magnetico.imgtop} alt="Papeles" /></span>{magnetico.subtitulo1}<h4>{magnetico.subtitulo}</h4>{magnetico.subtitulo2}
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <ul>
                  <li> <div className='products-a'><strong>{magnetico.a1}</strong></div> <div className='products-b'>{magnetico.b1}</div> <div><img src={magnetico.c1} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{magnetico.a2}</strong></div> <div className='products-b'>{magnetico.b2}</div> <div><img src={magnetico.c2} alt="" /></div>  </li>
                  <li> <div className='products-a'><strong>{magnetico.a3}</strong></div> <div className='products-b'>{magnetico.b3}</div> <div><img src={magnetico.c3} alt="" /></div>  </li>
                </ul>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>))}
    </section>
  )
}

export default Fotografico_magnetico