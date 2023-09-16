import React, { Component } from 'react';

class ProvinciasComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinciaSeleccionada: null,
        };
    }

    seleccionarProvincia(provincia) {
        // Esta función se llama cuando se hace clic en un botón de provincia
        this.setState({ provinciaSeleccionada: provincia });
    }

    renderDistribuidores(provincia) {
        // Define los distribuidores para cada provincia
        const distribuidores = {
            'Buenos Aires': ['BsAs 5', 'BsAs 6'],
            CABA: ['CABA 5', 'CABA 6'],
            Catamarca: ['Distribuidor 5', 'Distribuidor 6'],
            Chaco: ['Distribuidor 5', 'Distribuidor 6'],
            Chubut: ['Distribuidor 5', 'Distribuidor 6'],
            Córdoba: ['Distribuidor 5', 'Distribuidor 6'],
            Corrientes: ['Distribuidor 5', 'Distribuidor 6'],
            'Entre Ríos': ['Distribuidor 5', 'Distribuidor 6'],
            Formosa: ['Distribuidor 5', 'Distribuidor 6'],   
            Jujuy: [<img src="images/distribuidores/img1.png" alt="" />, <img src="images/distribuidores/img1.png" alt="" />],
            'La Pampa': ['Distribuidor 5', 'Distribuidor 6'],
            'La Rioja': ['Distribuidor 5', 'Distribuidor 6'],
            Mendoza: ['Distribuidor 5', 'Distribuidor 6'],
            Misiones: ['Distribuidor 5', 'Distribuidor 6'],
            Neuquén: ['Distribuidor 5', 'Distribuidor 6'],
            'Río Negro': ['Distribuidor 5', 'Distribuidor 6'],  
            Salta: ['Distribuidor 3', 'Distribuidor 4'],
            'San Juan': ['Distribuidor 5', 'Distribuidor 6'],
            'San Luis': ['Distribuidor 5', 'Distribuidor 6'],
            'Santa Cruz': ['Distribuidor 5', 'Distribuidor 6'],
            'Santa Fe': ['Distribuidor 5', 'Distribuidor 6'],
            'Santiago del Estero': ['Distribuidor 5', 'Distribuidor 6'],
            'Tierra del Fuego': ['Distribuidor 5', 'Distribuidor 6'],
            Tucumán: ['Distribuidor 5', 'Distribuidor 6'],

        };

        // Renderiza la lista de distribuidores para la provincia seleccionada
        return distribuidores[provincia].map((distribuidor, index) => (
            <li key={index}>{distribuidor}</li>
        ));
    }

    render() {
        return (
            <section>
                <h2>Nuestros Distribuidores por Provincia</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 columna-izquierda">
                            {/* Botones de las provincias */}
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>Buenos Aires</button>
                            <button onClick={() => this.seleccionarProvincia('CABA')}>CABA</button>
                            <button onClick={() => this.seleccionarProvincia('Catamarca')}>Catamarca</button>
                            <button onClick={() => this.seleccionarProvincia('Chaco')}>Chaco</button>
                            <button onClick={() => this.seleccionarProvincia('Chubut')}>Chubut</button>
                            <button onClick={() => this.seleccionarProvincia('Córdoba')}>Córdoba</button>
                            <button onClick={() => this.seleccionarProvincia('Corrientes')}>Corrientes</button>
                            <button onClick={() => this.seleccionarProvincia('Entre Ríos')}>Entre Ríos</button>
                            <button onClick={() => this.seleccionarProvincia('Formosa')}>Formosa</button>
                            <button onClick={() => this.seleccionarProvincia('Jujuy')}>Jujuy</button>
                            <button onClick={() => this.seleccionarProvincia('La Pampa')}>La Pampa</button>
                            <button onClick={() => this.seleccionarProvincia('La Rioja')}>La Rioja</button>
                            <button onClick={() => this.seleccionarProvincia('Mendoza')}>Mendoza</button>
                            <button onClick={() => this.seleccionarProvincia('Misiones')}>Misiones</button>
                            <button onClick={() => this.seleccionarProvincia('Neuquén')}>Neuquén</button>
                            <button onClick={() => this.seleccionarProvincia('Río Negro')}>Río Negro</button>
                            <button onClick={() => this.seleccionarProvincia('Salta')}>Salta</button>
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>San Juan</button>
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>San Luis</button>
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>Santa Cruz</button>
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>Santa Fe</button>
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>Santiago del Estero</button>
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>Tierra del Fuego</button>
                            <button onClick={() => this.seleccionarProvincia('Buenos Aires')}>Tucumán</button>

                        </div>
                        <div className="col-md-10 columna-derecha">
                            {/* Contenido relacionado con la provincia seleccionada */}
                            {this.state.provinciaSeleccionada && (
                                <>
                                    <h2>Distribuidores en {this.state.provinciaSeleccionada}</h2>
                                    {/* Aquí puedes mostrar los distribuidores de la provincia seleccionada */}
                                    <ul>
                                        {this.renderDistribuidores(this.state.provinciaSeleccionada)}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default ProvinciasComponent;
