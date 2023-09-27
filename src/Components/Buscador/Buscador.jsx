import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Buscador = () => {
  const opciones = [
    { value: 'papeles para sublimacion', label: 'Papeles para sublimación', hashLink: '/sublimacion/#papeles-sublimacion' },
    { value: 'tintas para sublimacion', label: 'Tintas para sublimación', hashLink: '/sublimacion/#tintas-sublimacion' },
    { value: 'papeles transfer', label: 'Papeles Transfer', hashLink: '/transfer/#papeles-transfer' },
    { value: 'papel fotografico mate', label: 'Papel Fotográfico Mate', hashLink: '/fotografico/#fotografico-mate' },
    { value: 'papel fotografico resinado', label: 'Papel Fotográfico Resinado', hashLink: '/fotografico/#fotografico-resinado' },
    { value: 'papel fotografico autoadhesivo', label: 'Papel Fotográfico Autoadhesivo', hashLink: '/fotografico/#fotografico-autoadhesivo' },
    { value: 'papel fotografico magnetico', label: 'Papel Fotográfico Magnético', hashLink: '/fotografico/#fotografico-magnetico' },
    { value: 'papel fotografico glossy', label: 'Papel Fotográfico Glossy', hashLink: '/fotografico/#fotografico-glossy' },
    { value: 'film dtf', label: 'Film DTF', hashLink: '/#mango' },
    { value: 'polvo dtf', label: 'Polvo DTF', hashLink: '/dtf/#polvo-dtf' },
    { value: 'tintas para dtf', label: 'Tintas para DTF', hashLink: '/dtf/#film-dtf' },
    { value: 'tintas inkjet', label: 'Tintas Inkjet', hashLink: '/#/fotografico' },
  ];

  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <section id="contenedor-buscador">
      <div>
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Buscar..."
          onChange={handleChange}
        />
        <div id="listaArticulos">
          {busqueda.length > 0 && // Verifica si la búsqueda tiene al menos un carácter
            opciones
              .filter((opcion) => opcion.value.includes(busqueda.toLowerCase()))
              .map((opcion) => (
                <Link
                  key={opcion.value}
                  to={opcion.hashLink}
                  className="enlace-buscador"
                >
                  {opcion.label}
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Buscador;
