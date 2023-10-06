

const FormDistribuidor = () => {


    return (
        <form className='formulario'>
            <div className="section-form">
                <div className='label-form'>
                    <label htmlFor='cuit'>CUIT</label>
                    <input className="margin-input"
                        required
                        type='text'
                        name='cuit'
                        placeholder='Tu CUIT'
                    />
                </div>
                <div className='label-form'>
                    <label>Nombre y Apellido</label>
                    <input
                        required
                        type='text'
                        name='nombreApellido'
                        placeholder='Tu Nombre y Apellido'
                    />


                </div>
            </div>
            <div className="section-form">
                <div className='label-form'>
                    <label>Telefono</label>
                    <input className="margin-input"
                        required
                        type='tel'
                        name='telefono'
                        placeholder='Telefono'
                    />
                </div>
                <div className='label-form'>
                    <label>Dirección</label>
                    <input
                        required
                        type='text'
                        name='direccion'
                        placeholder='Dirección'
                    />
                </div>
            </div>
            <div className="section-form">
                <div className='label-form-2'>
                    <label>Localidad</label>
                    <input className="margin-input"
                        required
                        type='text'
                        name='localidad'
                        placeholder='Localidad'
                    />
                </div>
                <div className='label-form-2'>
                    <label>Codigo Postal</label>
                    <input className="margin-input"
                        required
                        type='text'
                        name='codigo'
                        placeholder='Codigo - Postal'
                    />
                </div>
                <div className='label-form-2'>
                    <label>Provincia</label>
                    <input
                        required
                        type='text'
                        name='provincia'
                        placeholder='Provincia'
                    />
                </div>
            </div>
            <div className='section-form'>
                <div className='label-form'>
                    <label className="label-insumos">Insumos de Interés</label>
                    <div>
                        <div className="flex-check">
                            <label className="label-check">
                                <div className="title-check">
                                    Sublimación
                                </div>
                                <input
                                    type='checkbox'
                                    name='sublimacion'
                                />
                            </label>
                            <label className="label-check">
                                <div className="title-check">
                                    Transfer
                                </div>
                                <input
                                    type='checkbox'
                                    name='transfer'
                                />
                            </label>
                        </div>
                        <div className="flex-check">
                            <label className="label-check">
                                <div className="title-check">
                                    DTF                            </div>
                                <input
                                    type='checkbox'
                                    name='transfer'
                                />
                            </label>
                            <label className="label-check">
                                <div className="title-check">
                                    Ink-Jet
                                </div>
                                <input
                                    type='checkbox'
                                    name='ink-jet'
                                />
                            </label>
                        </div>

                    </div>
                </div>
            </div>
            <div className='label-form'>
                <label htmlFor='mensaje'>Mensaje</label>
                <textarea
                    required
                    name='mensaje'
                    placeholder='Escriba aquí su mensaje...'
                    cols='30'
                    rows='10'
                ></textarea>
            </div>
            <button className='button-celeste' type='submit'>
                Enviar Mensaje
            </button>
        </form>
    );
};

export default FormDistribuidor;
