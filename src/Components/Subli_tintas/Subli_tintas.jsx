import React from 'react'
import CallAction from '../CallAction/CallAction'
import { tintas } from '../../js/subli';

const Subli_tintas = () => {
    return (
        <section id='tintas-sublimacion'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 detail">
                        <h2>Tintas para Sublimación</h2>
                        <h3>Imágenes nítidas, vibrantes y duraderas.</h3>
                        <p>Una tinta distinguida por su capacidad de transferirse de manera efectiva y uniforme a la superficie del producto de destino.</p>
                    </div>
                    <div className="col-lg-6 description">
                        <ul className='caracteristicas'>
                            <div className='lis-caracteristicas'>
                                <li><strong>95% de</strong><br />transferencia</li>
                                <li>calidad<br /><strong>Ultra HD</strong></li>
                            </div>
                            <div className='lis-caracteristicas'>
                                <li>excelente<br /><strong>fluidez</strong></li>
                                <li>mejor relación<br /><strong>precio/calidad</strong></li>
                            </div>

                        </ul>
                    </div>
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
                    <div className="col-lg-6" key={tinta.id}>
                        <img className='img-fluid' src={tinta.img1} alt={tinta.titulo} />
                    </div>
                    <div className='col-lg-6 right'>
                        <h3>{tinta.titulo}</h3>
                        <img className='img-fluid' src={tinta.img2} alt="" />
                    </div>
                </div>
            ))}
            <CallAction />
        </section>
    )
}

export default Subli_tintas