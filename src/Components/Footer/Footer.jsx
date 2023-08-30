import React from 'react'

const Footer = () => {
  return (
    <footer className='footer px-5'>
      <div className='cont-footer'>
        <div className="row  rowFoot">
          <div className="col-4">
            <img src="/images/logoFooter.png" alt="Logo Artanium" />
            <h5>Seguinos en nuestras redes</h5>
            <div className='redesFoot'>
              <img src="/images/redes/facebook.png" alt="" />
              <img src="/images/redes/instagram.png" alt="" />
              <img src="/images/redes/youTube.png" alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className='links'>
              <h4>Productos</h4>
              <a href="">Sublimación</a>
              <a href="">Transfer</a>
              <a href="">Ink Jet</a>
              <a href="">DTF</a>
            </div>
            <div>

            </div>
          </div>
          <div className="col-2">
            <div className='links'>
              <h4>Nosotros</h4>
              <a href="">Sobre Nosotros</a>
            </div>
          </div>
          <div className="col-2">
            <div className='links'>
              <h4>Comunidad</h4>
              <a href="">Blog</a>

            </div>
          </div>
          <div className="col-2">
            <div className='links'>
              <h4>Contacto</h4>
              <a href="">Formulario</a>
            </div>
          </div>
        </div>

      </div>
      <div className='container'>
        <div className="row line">

        </div>
        <div className="row copyFoot">
          <h5>Copyright © 2023 <a href="">Versa Digital</a></h5>
        </div></div>

    </footer>
  )
}

export default Footer