import React from 'react'

const Separador2 = ({titulo, subtitulo}) => {
  return (
    <div className="row separador2">              
    <h2>{titulo}</h2>
      <div className="col-lg-4">
        <h3>{subtitulo}</h3>
      </div>
      <div className="col-lg-8 title-line">
        <div className="line"></div>
      </div>
    </div>


  )
}

export default Separador2