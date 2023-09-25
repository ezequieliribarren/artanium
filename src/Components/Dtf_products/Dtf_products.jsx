import React from 'react'
import { dtf } from '../../js/dtf';
import Separador2 from '../Separador2/Separador2';
import Ul_azul from '../Ul_azul/Ul_azul';


const Dtf_products = () => {
  return (
    <>
      {dtf.map((dtf) => (
        <section className="row" id={dtf.section}>
          <Separador2 titulo={dtf.titulo} subtitulo={dtf.subtitulo}/>
          <div className="row dtf-columns">
            <div className="col-lg-6">
              <img className='img-fluid' src={dtf.img} alt="" />
            </div>
            <div className='col-lg-6 right'>
              <div className='products-subtitles'>
                <img src={dtf.imgtop} alt="" />
                <h4>{dtf.subtitulo1}</h4>
              </div>
              <div className={dtf.line}></div>
              <Ul_azul a1={dtf.a1} a2={dtf.a2} a3={dtf.a3} b1={dtf.b1} b2={dtf.b2} b3={dtf.b3} c1={dtf.c1} c2={dtf.c2} c3={dtf.c3} clase={dtf.clase}/>
              <div className={dtf.line}></div>
            </div>
          </div>
        </section>))}
    </>
  )
}

export default Dtf_products