import React from 'react'
import CallAction from '../CallAction/CallAction'
import { tintas } from '../../js/subli';

const Subli_tintas = () => {
    return (
        <section id='tintas-sublimacion'>
                  <div className="row">
                <div className="col detail">
                    <h2>Tintas para Sublimación</h2>
                    <h3>Imágenes nítidas, vibrantes y duraderas.</h3>
                    <p>Una tinta distinguida por su capacidad de transferirse de manera efectiva y uniforme a la superficie del producto de destino.</p>
                </div>
                <div className="col description">
                    <ul className='caracteristicas'>
                        <li><strong>95% de</strong><br />transferencia</li>
                        <li>calidad<br /><strong>Ultra HD</strong></li>
                        <li>excelente<br /><strong>fluidez</strong></li>
                        <li>mejor relación<br /><strong>precio/calidad</strong></li>
                    </ul>
                </div>
            </div>
            <div className="container">
   <div className="row icons">
                <div className='line'></div>
                <div>
                    <ul>
                        <li><img src="images/subli/tintas/icon1.png" alt="" /> <h4>Colores Vivos</h4></li>
                        <li><img src="images/subli/tintas/icon2.png" alt="" /> <h4>Secado Rápido</h4></li>
                        <li><img src="images/subli/tintas/icon3.png" alt="" /> <h4>Uniformidad</h4></li>
                        <li><img src="images/subli/tintas/icon4.png" alt="" /> <h4>Alta Pigmentación</h4></li>
                        <li><img src="images/subli/tintas/icon5.png" alt="" /> <h4>Negros Intensos</h4></li>
                    </ul>
                </div>
                <div className='line'></div>
            </div>
            </div>
         
            {tintas.map((tinta) => (
                <div className="row products">
                    <div className="col" key={tinta.id}>
                        <img src={tinta.img1} alt={tinta.titulo} />
                    </div>
                    <div className='col right'>
                        <h3>{tinta.titulo}</h3>
                        <img src={tinta.img2} alt="" />
                    </div>
                </div>
            ))}
            <CallAction />
        </section>
    )
}

export default Subli_tintas