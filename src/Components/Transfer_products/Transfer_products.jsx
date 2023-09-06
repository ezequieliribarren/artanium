import React from 'react'
import { transfers } from '../../js/transfer';
import TopProducts from '../TopProducts/TopProducts';
const Transfer_products = () => {
  return (
    <section id='transfer-products'>
      <TopProducts title="Papel Transfer Inkjet" subtitle="Transferencia óptima / alta definición." p="En Artanium, presentamos una gama diversa de papeles transfer diseñados tanto para aplicaciones en textiles claros como oscuros." li1={  <li><strong>Calidad<br /> Fotográfica</strong></li>} li2={<li><strong>Alta adherencia<br />a la tela.</strong></li>} li3={<li><strong>Terminación<br />suave y elástica.</strong></li>} li4={<li><strong>Resistente<br />a la decoloración.</strong></li>} clase1="col detail" clase2= "col description" />
      {transfers.map((transfer) => (
        <div className="row products">
          <div className="row cols-transfer">
            <div className="col">
              <h3>{transfer.titulo}</h3>
              <img src={transfer.img} alt="Transfer" />
            </div>
            <div className='col'>
              <div className='subli-products-subtitles'>
                <span className='ico-h4'><img src={transfer.imgtop} alt="Transfer" /></span><h4>{transfer.subtitulo}</h4>
              </div>
              <div className="line"></div>
              <div className="ul-subli">
                <ul>
                  <li> <div className='subli-a'><strong>{transfer.a1}</strong></div> <div className='subli-b'>{transfer.b1}</div> <div><img src={transfer.c1} alt="" /></div>  </li>
                  <li> <div className='subli-a'><strong>{transfer.a2}</strong></div> <div className='subli-b'>{transfer.b2}</div> <div><img src={transfer.c2} alt="" /></div>  </li>
                  <li> <div className='subli-a'><strong>{transfer.a3}</strong></div> <div className='subli-b'>{transfer.b3}</div> <div><img src={transfer.c3} alt="" /></div>  </li>
                </ul>
              </div>
              <div className="line"></div>

            </div>
          </div>


        </div>))}
    </section>
  )
}

export default Transfer_products