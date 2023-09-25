import React from 'react'
import TopProducts from '../TopProducts/TopProducts'
import { magneticos } from '../../js/fotografico';

const Fotografico_magnetico = () => {
  return (
    <section id='fotografico-magnetico'>
      <TopProducts title="Papel Fotográfico Magnético" subtitle="Alta definición." p="Nuestros magneticoes magnéticos con calidad fotográfica vienen en dos terminaciones superficiales." li2={<li><strong>Secado<br />Rápido.</strong></li>} li3={<li><strong>Resistente<br />al Agua.</strong></li>} li4={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col-lg-6 detail" clase2="col-lg-6 description" />

      {magneticos.map((magnetico) => (
        <div className="row products">
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={magnetico.img} alt="Papeles" />
            </div>
            <div className='col-lg-6'>
              <div className='products-subtitles'>
                {magnetico.subtitulo1}<h4>{magnetico.subtitulo}</h4>{magnetico.subtitulo2}
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <div>
                  <div className='products-a'>
                    <h4><strong>{magnetico.a1}</strong></h4></div>
                  <div className='products-b'>
                    <p>{magnetico.b1}</p></div>
                  <div className='products-c'>
                    <img src={magnetico.c1} alt="" /></div>
                </div>
                <div>
                  <div className='products-a'>
                    <h4><strong>{magnetico.a2}</strong></h4></div>
                  <div className='products-b'>
                    <p>{magnetico.b2}</p></div>
                  <div className='products-c'>
                    <img src={magnetico.c2} alt="" /></div></div>
                <div>
                  <div className='products-a'><h4><strong>{magnetico.a3}</strong></h4></div>
                  <div className='products-b'><p>{magnetico.b3}</p></div>
                  <div className='products-c'><img src={magnetico.c3} alt="" /></div></div>

              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>))}
    </section>
  )
}

export default Fotografico_magnetico