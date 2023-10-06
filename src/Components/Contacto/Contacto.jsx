import React, { useState } from 'react';
import FormConsulta from '../FormConsulta/FormConsulta';
import FormDistribuidor from '../FormDistribuidor/FormDistribuidor';

const Contacto = () => {
    const [consultaTipo, setConsultaTipo] = useState('Selecciona una opción');

    const handleConsultaChange = (e) => {
      setConsultaTipo(e.target.value);
    };
    return (
        <section id='contacto'>
        <div className="container-fluid contacto">
          <div className="row">
            <div className="col-xl-6 img-contacto">
            <img className='img-fluid' src="images/contacto/contacto.png" alt="Contacto" /> 
            </div>
            <div className="col-xl-6">
              <div className='label-form'>
                <label htmlFor="">Me contacto para</label>
                <select required name="para" id="" value={consultaTipo} onChange={handleConsultaChange}>
                <option value="Ser distribuidor de Artanium">Ser distribuidor de Artanium</option>
                                    <option value="Hacer una consulta">Hacer una consulta</option>
                </select>
              </div>
              {consultaTipo === 'Hacer una consulta' ? (
                // Formulario para consulta
                <FormConsulta/>
              ) : (
                // Formulario para ser distribuidor
                <FormDistribuidor />
              )}
            </div>
          </div>
        </div>
      </section>
     
    )
}

export default Contacto