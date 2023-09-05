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
                        <div className="col">
                            <h3>{dtf.product}</h3>
                            <img src={dtf.img} alt="" />
                        </div>
                        <div className='col'>
                        <div className='subli-products-subtitles'>
                <span className='ico-h4'><img src={dtf.imgtop} alt="DTF" /></span><h4>{dtf.subtitulo1}</h4>
              </div>
                            <div className={dtf.line}></div>
                            <div className={dtf.class}>
                                <ul>
                                    <li> <div className='subli-a'><strong>{dtf.a1}</strong></div> <div className='subli-b'>{dtf.b1}</div> <div><img src={dtf.c1} alt="" /></div>  </li>
                                    <li> <div className='subli-a'><strong>{dtf.a2}</strong></div> <div className='subli-b'>{dtf.b2}</div> <div><img src={dtf.c2} alt="" /></div>  </li>
                                    <li> <div className='subli-a'><strong>{dtf.a3}</strong></div> <div className='subli-b'>{dtf.b3}</div> <div><img src={dtf.c3} alt="" /></div>  </li>
                                </ul>
                            </div>
                        <div className={dtf.line}></div>
                        </div>
                    </div>




                </div>))}
        </section>
    )
}

export default Dtf_products