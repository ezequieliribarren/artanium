import React from 'react'
import { autoadhesivos } from '../../js/fotografico'
import TopProducts from '../TopProducts/TopProducts'

const Fotografico_autoadhesivo = () => {
  return (
    <section id='fotografico-autoadhesivo'>

      <TopProducts title="Papel Fotográfico Autoadhesivo" subtitle="Alta definición." p="Nuestros autoadhesivoes autoadhesivos con calidad fotográfica vienen en dos terminaciones superficiales y varios formatos." li3={<li><strong>Secado<br />Rápido.</strong></li>} li4={<li><strong>Resistente<br />al Agua.</strong></li>} li1={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col-lg-6 detail" clase2="col-lg-6 description" caracteristicas="caracteristicas" />

      {autoadhesivos.map((autoadhesivo) => (
        <div className="row products">
          <div className="row contenedor">
            <div className="col-lg-6">
              <img className='img-fluid' src={autoadhesivo.img} alt="Papeles" />
            </div>
            <div className='col-lg-6 right'>
              <div className='products-subtitles'>
                <h4>{autoadhesivo.subtitulo}</h4>
              </div>
              <div className="line"></div>
              <div className="ul-products">
                <div>
                  <div className='products-a'>
                    <h4><strong>{autoadhesivo.a1}</strong></h4></div>
                  <div className='products-b'>
                    <p>{autoadhesivo.b1}</p></div>
                  <div className='products-c'>
                    <img src={autoadhesivo.c1} alt="" /></div>
                </div>
                <div>
                  <div className='products-a'>
                    <h4><strong>{autoadhesivo.a2}</strong></h4></div>
                  <div className='products-b'>
                    <p>{autoadhesivo.b2}</p></div>
                  <div className='products-c'>
                    <img src={autoadhesivo.c2} alt="" /></div></div>
                <div>
                  <div className='products-a'><h4><strong>{autoadhesivo.a3}</strong></h4></div>
                  <div className='products-b'><p>{autoadhesivo.b3}</p></div>
                  <div className='products-c'><img src={autoadhesivo.c3} alt="" /></div></div>

              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>))}



    </section>
  )
}

export default Fotografico_autoadhesivo