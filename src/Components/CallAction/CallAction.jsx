import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const CallAction = () => {
  return (
    <section className='call-action'>
      <h2>¿Querés revender nuestros productos?</h2>
      <Link className="nav-link" to="/ser-distribuidor">
            <button className='button-celeste'>Ser distribuidor</button>
      </Link>
  
    </section>



  )
}

export default CallAction