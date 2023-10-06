import React from 'react'

const FormConsulta = () => {
    return (
        <form className='formulario' action="">
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
    )
}

export default FormConsulta