import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import products from "../../js/products"
import { Link } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';

const Productos = () => {
  return (
    <section id='productos'>
      <div className='buscador'>
        <Buscador />  
      </div>
    <h2 className='container'>Nuestros Productos</h2>

      <div className='row cards-products'>
        {products.map((product) => (

          <Card className='card-products col-4 col-lg-6 col-sm-12' key={product.id} sx={{ maxWidth: 345 }}>
            <Link to={product.link}>
              <h3>{product.titulo}</h3>
              <div className='card-top'>
                <img className='img-card' src={product.img} alt="Producto" />
              </div>

              <CardContent>
                <p>{product.description}</p>
              </CardContent>
              <Link to={product.link} className='button-products'>
                <button>Ver más</button>
              </Link>
            </Link>
          </Card>


        ))}

      </div>
    </section>
  );
};

export default Productos;