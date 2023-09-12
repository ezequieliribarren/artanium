import React from 'react'

const TopProducts = ({ title, subtitle, p, li1, li2, li3, li4, li5, li6, li7, clase1, clase2 }) => {
  return (
    <div className='top-products p-3'>
      <div className="row">
        <div className={clase1}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{p}</p>
        </div>
        <div className={clase2}>
          <ul className='caracteristicas'>
              {li1}
              {li2}
              {li3}
              {li4}
              {li5}
              {li6}
              {li7}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopProducts