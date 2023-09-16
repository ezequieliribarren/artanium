import React from 'react'

const Ul_azul = ({a1, a2, a3, b1, b2, b3, c1, c2, c3, clase}) => {
  return (
    <div className= {clase}>
    <div className="ul-products">
      <div>
        <div className='products-a'>
          <h4><strong><span className='point-ul-azul'>•</span>{a1}</strong></h4></div>
        <div className='products-b'>
          <p>{b1}</p></div>
        <div className='products-c'>
          <img src={c1} alt="" /></div>
      </div>
      <div>
        <div className='products-a'>
          <h4><strong><span className='point-ul-azul'>•</span>{a2}</strong></h4></div>
        <div className='products-b'>
          <p>{b2}</p></div>
        <div className='products-c'>
          <img src={c2} alt="" /></div></div>

      <div>
        <div className='products-a'><h4><strong><span className='point-ul-azul'>•</span>{a3}</strong></h4></div>
        <div className='products-b'><p>{b3}</p></div>
        <div className='products-c'><img src={c3} alt="" /></div></div>

    </div>

  </div>
  )
}

export default Ul_azul