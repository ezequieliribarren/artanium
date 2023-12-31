import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='footer px-5'>
      <div className='cont-footer'>
        <div className="row  rowFoot">
          <div className="col-12 col-md-4">
            <img src="/images/logoFooter.png" alt="Logo Artanium" />
            <h5>Seguinos en nuestras redes</h5>
            <div className='redesFoot'>
              <img src="/images/redes/facebook.png" alt="" />
              <img src="/images/redes/instagram.png" alt="" />
              <img src="/images/redes/youTube.png" alt="" />
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <div className='links'>
              <h4>Productos</h4>
              <Link to="/sublimacion">
                Sublimación
              </Link>
              <Link to="/transfer">
                Transfer
              </Link>
              <Link to="/fotografico">
                Ink jet
              </Link>
              <Link to="/dtf">
                DTF
              </Link>
            </div>
            <div>

            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <div className='links'>
              <h4>Nosotros</h4>
              <Link smooth to="/#nosotros">
                Sobre Nosotros
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <div className='links'>
              <h4>Comunidad</h4>
              <Link to="/en-construccion">
                Blog
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2">
            <div className='links'>
              <h4>Contacto</h4>
              <Link smooth to="/#contacto">
                Formulario
              </Link>
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