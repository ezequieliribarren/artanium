import React from 'react'
import { transfers } from '../../js/transfer';
import TopProducts from '../TopProducts/TopProducts';

const Transfer_products = () => {
  return (
    <>
      <section >
        <TopProducts title="Papel Transfer Inkjet" subtitle="Transferencia óptima / alta definición." p="En Artanium, presentamos una gama diversa de papeles transfer diseñados tanto para aplicaciones en textiles claros como oscuros." li1={<li><strong>Calidad<br /> Fotográfica</strong></li>} li2={<li><strong>Alta adherencia<br />a la tela.</strong></li>} li3={<li><strong>Terminación<br />suave y elástica.</strong></li>} li4={<li><strong>Resistente<br />a la decoloración.</strong></li>} clase1="col-lg-6 detail" clase2="col-lg-6 description" caracteristicas="caracteristicas" />

      </section>
      <section id='papeles-transfer'>
        {transfers.map((transfer) => (
          <div className="row products">
            <div className="row cols-transfer">
              <div className="col-lg-6 ">
                <img className='img-fluid' src={transfer.img} alt="Transfer" />
              </div>
              <div className='col-lg-6 right'>
                <div className='products-subtitles'>
                  <div>
                    <img src={transfer.imgtop} alt="" />
                  </div>
                  <div>
                    <h4>{transfer.subtitulo}</h4>
                  </div>
                </div>
                <div className="line"></div>
                <div className="ul-products">
                  <div>
                    <div className='products-a'>
                      <h4><strong>{transfer.a1}</strong></h4></div>
                    <div className='products-b'>
                      <p>{transfer.b1}</p></div>
                    <div className='products-c'>
                      <img src={transfer.c1} alt="" /></div>
                  </div>
                  <div>
                    <div className='products-a'>
                      <h4><strong>{transfer.a2}</strong></h4></div>
                    <div className='products-b'>
                      <p>{transfer.b2}</p></div>
                    <div className='products-c'>
                      <img src={transfer.c2} alt="" /></div></div>

                  <div>
                    <div className='products-a'><h4><strong>{transfer.a3}</strong></h4></div>
                    <div className='products-b'><p>{transfer.b3}</p></div>
                    <div className='products-c'><img src={transfer.c3} alt="" /></div></div>

                </div>
                <div className="line"></div>

              </div>
            </div>


          </div>))}
      </section>
    </>



  )
}

export default Transfer_products