import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import products from "../../js/products"

const Productos = () => {
    return (
      <div>
        <h2 className='margin-title'>Nuestros Productos</h2>
        <div className='row cards-products'>
         {products.map((product) => (
            <Card className='card-products col-4 col-lg-6 col-sm-12' key={product.id} sx={{ maxWidth: 345 }}>
              <h3>{product.titulo}</h3>
              <div className='card-top'>
                 <img className='img-card' src={product.img} alt="Producto" />
              </div>
             
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
              <button>Ver más</button>
            </Card>
          ))}
 
        </div>
      </div>
    );
  };
  
  export default Productos;