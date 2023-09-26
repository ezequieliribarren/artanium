import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Construccion = () => {
    return (
        <section id='construccion'>
            <div className="container construccion">
                <div>
                    <img src="images/construccion.png" alt="En - construccion" />
                </div>
                <div>
                    <h2>Estamos trabajando para crear esta página</h2>
                </div>
                <div>
                    <h3>¡Muy pronto estará disponible!</h3>
                </div>
                <div>
                    <Link to="/" > <button className='button-celeste'>Volver al inicio</button></Link>
               
                </div>
            </div>



        </section>
    )
}

export default Construccion