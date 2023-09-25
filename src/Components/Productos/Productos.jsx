import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import products from "../../js/products"
import { Link } from 'react-router-dom';

const Productos = () => {
  return (
    <section id='productos'>
      <h2 className='margin-title container'>Nuestros Productos</h2>
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