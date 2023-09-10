import React from 'react'

const Contacto = () => {
    return (
        <section id='contacto'>
            <div className=" container-fluid contacto">
                <div className="row">
                    <div className="col img-contacto">
                        <div clasName="">
                             <img className='img-fluid' src="images/contacto/contacto.png" alt="Contacto" /> 
                        </div>
                    </div>
                    <div className="col">
                        <form className='formulario' action="">
                            <h3>Hablemos!</h3>
                            <div className='label-form'>
                                <label htmlFor="">Me contacto para</label>
                                <select required name="para" id="">
                                    <option value="Selecciona una opción">Selecciona una opción</option>
                                    <option value="Ser distribuidor de Artanium">Ser distribuidor de Artanium</option>
                                    <option value="Hacer una consulta">Hacer una consulta</option>
                                </select>
                            </div>
                            <div className='section-form'>
                                <div className='label-form'>
                                    <label htmlFor="">Nombre</label>
                                    <input required className='margin-input' type="text" name='name' placeholder='Tu Nombre' />
                                </div>
                                <div className='label-form'>
                                    <label htmlFor="">E-mail</label>
                                    <input required type="email" name='email' placeholder='ejemplo@email.com' />
                                </div>

                            </div>
                            <div className='section-form'>
                                <div className='label-form'>
                                    <label htmlFor="">Teléfono</label>
                                    <input required className='margin-input' type="tel" name='tel' placeholder='11-3333-4444' />
                                </div>
                                <div className='label-form'>
                                    <label htmlFor="">Empresa</label>
                                    <input required type="text" name='empresa' placeholder='Nombre Empresa' />
                                </div>

                            </div>
                            <div className='label-form'>
                                <label htmlFor="">Consulta</label>
                                <textarea required name="consulta" placeholder='Escriba aquí su mensaje...' id="" cols="30" rows="10"></textarea>
                            </div>
                            <button className='button-celeste' type='submit'>Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto