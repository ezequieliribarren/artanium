import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Distribuidores = () => {
  return (
    <section id='distribuidores'>
      <div className="container">
        <h2 className='margin-title'>Confían en nosotros +100 distribuidores</h2>
        <h3>De la mano de nuestros más de 100 distribuidores llegamos a cada parte del país</h3>
    <div className="row distribuidores-logos">
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img1.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img2.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img3.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img4.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img5.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img1.png" alt="" /></div>
    </div>
        <div className="row action-distribuidores">
          <div className='buttons-distribuidores'>
          <Link className="nav-link" to="/en-construccion">
             <button>Ser distribuidor</button>   
                                </Link>
             <Link className="nav-link" to="/en-construccion">
             <button>Donde Comprar</button>   
                                </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Distribuidores