import React from 'react'
import { dtf } from '../../js/dtf';

const Dtf_products = () => {
    return (
        <section id='dtf-products'>
            {dtf.map((dtf) => (
                <div className="row products">
                    <div className="row">
                        <div className="col">
                            <h3>{dtf.titulo}</h3>
                            <div className="title-line">
                                <h4>{dtf.subtitulo}</h4>
                                <div className="line"></div>
                            </div>

                        </div>
                    </div>
                    <div className="row dtf-columns">
                        <div className="col-lg-6">
                            <img src={dtf.img} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='products-subtitles'>
                             <h4>{dtf.subtitulo1}</h4>
                            </div>
                            <div className={dtf.line}></div>
                            <div className={dtf.class}>
                            <div className="ul-products">
                <div>
                  <div className='products-a'>
                    <h4><strong>{dtf.a1}</strong></h4></div>
                  <div className='products-b'>
                    <p>{dtf.b1}</p></div>
                  <div className='products-c'>
                    <img src={dtf.c1} alt="" /></div>
                </div>
                <div>
                  <div className='products-a'>
                    <h4><strong>{dtf.a2}</strong></h4></div>
                  <div className='products-b'>
                    <p>{dtf.b2}</p></div>
                  <div className='products-c'>
                    <img src={dtf.c2} alt="" /></div></div>

                <div>
                  <div className='products-a'><h4><strong>{dtf.a3}</strong></h4></div>
                  <div className='products-b'><p>{dtf.b3}</p></div>
                  <div className='products-c'><img src={dtf.c3} alt="" /></div></div>

              </div>

                            </div>
                            <div className={dtf.line}></div>
                        </div>
                    </div>




                </div>))}
        </section>
    )
}

export default Dtf_products